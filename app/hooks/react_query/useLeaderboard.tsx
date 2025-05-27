import { useQuery } from "@tanstack/react-query";
import { getLeaderboardByLeague } from "~/api/api_client";
import { QUERY_KEYS } from "~/api/query_keys";
import type { LeagueIds } from "~/index";

export const useLeaderboard = ({ league_id }: { league_id: LeagueIds }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_LEADERBOARD, { league_id }],
    queryFn: () => getLeaderboardByLeague({ league_id }),
    // 5 minutes
  });
};
