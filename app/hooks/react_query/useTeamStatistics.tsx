import { useQueries, useQuery } from "@tanstack/react-query";
import { getTeamInfo, getTeamSquad, getTeamStatistics } from "~/api/api_client";
import type { TeamInfo } from "~/api/interfaces/team_information";
import type { Player, TeamSquad } from "~/api/interfaces/team_squad";
import type { TeamStatistics } from "~/api/interfaces/team_statistics";
import { QUERY_KEYS } from "~/api/query_keys";
import type { LeagueIds } from "~/index";

export interface TeamDetailData {
  team: {
    name: string;
    logo: string;
    league: string;
    league_icon: string;
    league_country: string;
    league_country_flag: string;
  };
  stadium: {
    image: string;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
  };
  statistics: {
    wins: number;
    loses: number;
    draws: number;
    goals: number;
    clean_sheets: number;
    prefered_formation: string;
  };
  squad: Player[];
}

export const useTeamCompleteInformation = ({
  league_id,
  team_id,
}: {
  league_id: LeagueIds;
  team_id: number;
}) => {
  const test = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEYS.GET_TEAM_STATISTICS, league_id, team_id],
        queryFn: () => getTeamStatistics({ league_id, team_id }),
      },
      {
        queryKey: [QUERY_KEYS.GET_TEAM_INFORMATION, league_id, team_id],
        queryFn: () => getTeamInfo({ league_id, team_id }),
      },
      {
        queryKey: [QUERY_KEYS.GET_TEAM_SQUAD, team_id],
        queryFn: () => getTeamSquad({ team_id }),
      },
    ],
  });

  return {
    ...test[0],
    ...test[1],
    ...test[2],
    data:
      test[0].data &&
      test[1].data &&
      test[2].data &&
      transformTeamData({
        statistics: test[0]?.data,
        information: test[1]?.data,
        squad: test[2]?.data,
      }),
  };
};

//Generame una funcion que transforme la data de la API en un formato que pueda ser utilizada en detail page de acuerdo a los tres llamados anteriores
function transformTeamData(data: {
  statistics: TeamStatistics["response"];
  information: TeamInfo["response"];
  squad: TeamSquad["response"];
}): TeamDetailData {
  return {
    team: {
      name: data.information?.[0].team.name,
      logo: data.information?.[0].team.logo,
      league: data.statistics?.league.name,
      league_icon: data.statistics?.league.logo,
      league_country: data.statistics?.league.country,
      league_country_flag: data.statistics?.league.flag,
    },
    stadium: {
      image: data.information?.[0].venue.image,
      name: data.information?.[0].venue.name,
      address: data.information?.[0].venue.address,
      city: data.information?.[0].venue.city,
      capacity: data.information?.[0].venue.capacity,
      surface: data.information?.[0].venue.surface,
    },
    statistics: {
      wins: data.statistics?.fixtures.wins.total,
      loses: data.statistics?.fixtures.loses.total,
      draws: data.statistics?.fixtures.draws.total,
      goals: data.statistics?.goals.for.total.total,
      clean_sheets: data.statistics?.clean_sheet.total,
      prefered_formation: data.statistics?.lineups[0]?.formation || "Unknown",
    },
    squad: data.squad?.[0]?.players || [],
  };
}
