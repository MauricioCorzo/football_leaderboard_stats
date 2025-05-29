import { create } from "zustand";
import type { LeagueIds } from "..";

type State = {
  league_id: LeagueIds;
};

type Action = {
  updateLeagueSelected: (league_id: State["league_id"]) => void;
};

export const useLeagueSelectedStore = create<State & Action>((set) => ({
  league_id: 39,

  updateLeagueSelected: (league_id) => set(() => ({ league_id: league_id })),
}));
