export interface Leaderboard {
  league_id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Place[];
}

export interface Place {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string | null;
  all: All;
  home: Home;
  away: Away;
  update: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Goals {
  for: number;
  against: number;
}

export interface Home {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals2;
}

export interface Goals2 {
  for: number;
  against: number;
}

export interface Away {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals3;
}

export interface Goals3 {
  for: number;
  against: number;
}
