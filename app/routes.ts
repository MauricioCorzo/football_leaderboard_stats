import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("pages/root_layout.tsx", [
    index("pages/home/home_screen.tsx"),
    route("rankings", "pages/rankings/rankings_screen.tsx"),
    route("champions", "pages/champions/champions_screen.tsx"),
    route(
      "league/:league_id/club-detail/:club_id",
      "pages/club_detail/club_detail_screen.tsx"
    ),
  ]),
] satisfies RouteConfig;
