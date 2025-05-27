export interface TeamSquad {
  response: Response[];
}

export interface Response {
  team: Team;
  players: Player[];
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Player {
  id: number;
  name: string;
  age: number;
  number?: number;
  position: string;
  photo: string;
}
