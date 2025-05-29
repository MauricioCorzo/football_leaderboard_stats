import { create } from "zustand";
import type { LeagueIds } from "..";
import { getFromLocalStorage, saveToLocalStorage } from "~/lib/utils";

export type FavouriteTeam = {
  team_id: number;
  team_league_id: LeagueIds;
  team_name: string;
  team_logo: string;
  team_league_name?: string;
};

type State = {
  favourite_teams: Record<string, FavouriteTeam>;
};

type Action = {
  addFavouriteTeam: (team: FavouriteTeam) => void;
  removeFavouriteTeam: (teamId: number) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useFavouritesStore = create<State & Action>((set) => ({
  favourite_teams: getFromLocalStorage("favouriteTeams") || {},

  addFavouriteTeam: (team) =>
    set((state) => {
      const updatedTeams = { ...state.favourite_teams, [team.team_id]: team };
      saveToLocalStorage("favouriteTeams", updatedTeams);
      return { favourite_teams: updatedTeams };
    }),

  removeFavouriteTeam: (id) => {
    set((state) => {
      const { [id]: _, ...updatedTeams } = state.favourite_teams;
      saveToLocalStorage("favouriteTeams", updatedTeams);
      return { favourite_teams: updatedTeams };
    });
  },
}));
