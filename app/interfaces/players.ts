export interface Players {
    player: Player;
    statistics: Statistic[];
}

export interface Player {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: Birth;
    nationality: string;
    height: string | null;
    weight: string | null;
    injured: boolean;
    photo: string;
}

export interface Birth {
    date: string;
    place: string | null;
    country: string;
}

export interface Statistic {
    team: Team;
    league: League;
    games: Games;
    substitutes: Substitutes;
    shots: Shots;
    goals: Goals;
    passes: Passes;
    tackles: Tackles;
    duels: Duels;
    dribbles: Dribbles;
    fouls: Fouls;
    cards: Cards;
    penalty: Penalty;
}

export interface Team {
    id: number;
    name: string;
    logo: string;
}

export interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
}

export interface Games {
    appearences: number;
    lineups: number;
    minutes: number;
    number: any;
    position: string;
    rating: string;
    captain: boolean;
}

export interface Substitutes {
    in: number;
    out: number;
    bench: number;
}

export interface Shots {
    total: number | null;
    on: number | null;
}

export interface Goals {
    total: number;
    conceded: number;
    assists: number | null;
    saves: any;
}

export interface Passes {
    total: number;
    key: number | null;
    accuracy?: number | null;
}

export interface Tackles {
    total: number | null;
    blocks?: number | null;
    interceptions: number | null;
}

export interface Duels {
    total: number;
    won: number;
}

export interface Dribbles {
    attempts: number | null;
    success: number | null;
    past: any;
}

export interface Fouls {
    drawn: number | null;
    committed: number;
}

export interface Cards {
    yellow: number;
    yellowred: number;
    red: number;
}

export interface Penalty {
    won: any;
    commited: any;
    scored: number;
    missed: number;
    saved: any;
}
