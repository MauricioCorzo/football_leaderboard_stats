import type { Leaderboard } from "~/api/interfaces/leaderboard";
import type { LeagueIds } from "..";
import type { TeamInfo } from "./interfaces/team_information";
import type { TeamSquad } from "./interfaces/team_squad";
import type { TeamStatistics } from "./interfaces/team_statistics";
import { sleep } from "~/lib/utils";
import type { TopRanking } from "./interfaces/players";

type RequestOptions = RequestInit & {
  to?: "json_server" | "api_football";
  path: string;
  qs?: Record<string, number | string | boolean | undefined>;
  json?: Record<string, unknown>;
  authenticated?: boolean;
};

export const getLeaderboardByLeague = async ({
  league_id,
}: {
  league_id: LeagueIds;
}): Promise<Leaderboard> => {
  const response = await makeRequest({
    path: `/league/${league_id}/leaderboard`,
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  await sleep(200);

  if (!data || !data.length) {
    throw new Error("No leaderboard data found");
  }

  return data[0] as Leaderboard;
};

export const getTopScorersByLeague = async ({
  league_id,
}: {
  league_id: LeagueIds;
}): Promise<TopRanking> => {
  const response = await makeRequest({
    to: "json_server",
    path: `/league/${league_id}/top-scorers`,
    method: "GET",
  });

  const data = await response.json();
  await sleep(200);
  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} ${response.statusText} ${JSON.stringify(data)}`
    );
  }
  if (!data || !data.length) {
    throw new Error("No top scorers data found");
  }
  return data[0] as TopRanking;
};

export const getTopAssistsByLeague = async ({
  league_id,
}: {
  league_id: LeagueIds;
}): Promise<TopRanking> => {
  const response = await makeRequest({
    to: "json_server",
    path: `/league/${league_id}/top-assists`,
    method: "GET",
  });

  const data = await response.json();
  await sleep(200);
  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} ${response.statusText} ${JSON.stringify(data)}`
    );
  }
  if (!data || !data.length) {
    throw new Error("No top scorers data found");
  }
  return data[0] as TopRanking;
};

export const getTopRedCardsByLeague = async ({
  league_id,
}: {
  league_id: LeagueIds;
}): Promise<TopRanking> => {
  const response = await makeRequest({
    to: "json_server",
    path: `/league/${league_id}/top-red-cards`,
    method: "GET",
  });

  const data = await response.json();
  await sleep(1000); // Simulate delay for testing
  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} ${response.statusText} ${JSON.stringify(data)}`
    );
  }
  if (!data || !data.length) {
    throw new Error("No top scorers data found");
  }
  return data[0] as TopRanking;
};

export const getTeamInfo = async ({
  league_id,
  team_id,
}: {
  league_id: LeagueIds;
  team_id: number;
}) => {
  const response = await makeRequest({
    to: "api_football",
    path: "/teams",
    method: "GET",
    authenticated: true,
    qs: {
      league: league_id,
      season: 2023,
      id: team_id,
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} ${response.statusText} ${JSON.stringify(data)}`
    );
  }
  return data.response as TeamInfo["response"];
};

export const getTeamStatistics = async ({
  league_id,
  team_id,
}: {
  league_id: LeagueIds;
  team_id: number;
}): Promise<TeamStatistics["response"]> => {
  const response = await makeRequest({
    to: "api_football",
    path: "/teams/statistics",
    method: "GET",
    qs: {
      league: league_id,
      season: 2023,
      team: team_id,
    },
    authenticated: true,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} ${response.statusText} ${JSON.stringify(data)}`
    );
  }
  return data.response as TeamStatistics["response"];
};

export const getTeamSquad = async ({ team_id }: { team_id: number }) => {
  const response = await makeRequest({
    to: "api_football",
    path: "/players/squads",
    method: "GET",
    authenticated: true,
    qs: {
      team: team_id,
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      `Error: ${response.status} ${response.statusText} ${JSON.stringify(data)}`
    );
  }
  return data.response as TeamSquad["response"];
};

const base_url_json_server =
  import.meta.env.VITE_JSON_SERVER_PUBLIC_API ||
  `https://json-server-soccer-api-backend-production.up.railway.app`;

const base_url_api_football = `https://v3.football.api-sports.io`;

async function makeRequest({
  to = "json_server",
  path,
  json,
  authenticated,
  ...options
}: RequestOptions): Promise<Response> {
  const url = new URL(
    `${
      to === "json_server" ? base_url_json_server : base_url_api_football
    }${path}`
  );
  Object.entries(options.qs || {}).forEach(([name, value]) => {
    if (value !== undefined) {
      url.searchParams.append(name, String(value));
    }
  });
  if (json) {
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(json);
  }
  if (authenticated) {
    const api_key = import.meta.env.VITE_API_FOOTBALL_API_KEY || "";
    if (!api_key) {
      throw new Error("API key is not set");
    }
    options.headers = {
      ...options.headers,
      "x-rapidapi-key": `${api_key}`,
    };
  }
  return fetch(url.toString(), options);
}
