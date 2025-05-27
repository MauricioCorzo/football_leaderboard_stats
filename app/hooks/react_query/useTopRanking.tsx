import { useQuery } from "@tanstack/react-query";
import {
  getTopAssistsByLeague,
  getTopRedCardsByLeague,
  getTopScorersByLeague,
} from "~/api/api_client";
import { QUERY_KEYS } from "~/api/query_keys";
import type { LeagueIds } from "~/index";

export const useTopRanking = ({
  league_id,
  type,
}: {
  league_id: LeagueIds;
  type: "top-scorers" | "top-assists" | "top-red-cards";
}) => {
  const queryFn = {
    "top-scorers": () => getTopScorersByLeague({ league_id }),
    "top-assists": () => getTopAssistsByLeague({ league_id }),
    "top-red-cards": () => getTopRedCardsByLeague({ league_id }),
  }[type];

  return useQuery({
    queryKey: [QUERY_KEYS.GET_TOP_SCORERS, { league_id, type }],
    queryFn,
    // 5 minutes
  });
};
