import type { LeagueIds } from "..";

export const sidebarItems = [
  {
    id: 1,
    icon: "/assets/icons/home.svg",
    label: "Leaderboard",
    href: "/",
  },
  {
    id: 2,
    icon: "/assets/icons/users.svg",
    label: "Rankings",
    href: "/rankings",
  },
  {
    id: 3,
    icon: "/assets/icons/star.svg",
    label: "Favorites",
    href: "/favorite-teams",
  },
];

export const sortableColumns = [
  {
    name: "Ascending",
    code: "asc",
    types: [
      {
        cname: "Place",
        code: "place-asc",
      },
      {
        cname: "Club",
        code: "club-asc",
      },
    ],
  },
  {
    name: "Descending",
    code: "desc",
    types: [
      {
        cname: "Place",
        code: "place-desc",
      },
      {
        cname: "Club",
        code: "club-desc",
      },
    ],
  },
];

export const tournoments: { id: LeagueIds; name: string }[] = [
  { id: 39, name: "Premier League" },
  { id: 135, name: "Serie A" },
  { id: 140, name: "La Liga" },
  { id: 61, name: "Ligue 1" },
  { id: 128, name: "Liga Profesional Argentina" },
];
