import { create } from "zustand";
import type { LeagueIds } from "..";
import { getFromLocalStorage, saveToLocalStorage } from "~/lib/utils";

type TeamsVisited = {
  team_id: number;
  team_league_id: LeagueIds;
  team_name: string;
  team_logo: string;
};
type State = {
  teams_visited: TeamsVisited[];
};

type Action = {
  addTeamVisit: (team: TeamsVisited) => void;
};

export const useLastVisitedStore = create<State & Action>((set) => ({
  teams_visited: getFromLocalStorage("teamsVisited") || [],

  addTeamVisit: (team) =>
    set((state) => {
      const existingItem = state.teams_visited.find(
        (existingItem) => existingItem.team_id === team.team_id
      );
      if (existingItem) {
        const teams_visited = [
          existingItem,
          ...state.teams_visited.filter(
            (existing) => existing.team_id !== team.team_id
          ),
        ];
        saveToLocalStorage("teamsVisited", teams_visited);
        return {
          teams_visited: teams_visited,
        };
      }

      const teams_visited = [team, ...state.teams_visited.slice(0, 2)];
      saveToLocalStorage("teamsVisited", teams_visited);
      return {
        teams_visited: teams_visited,
      };
    }),
}));
