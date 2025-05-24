import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
    layout('pages/RootLayout.tsx', [
        index('pages/home/home_screen.tsx'),
        route('rankings', 'pages/rankings/rankings_screen.tsx'),
        route('champions', 'pages/champions/champions_screen.tsx'),
        route('club-detail/:id', 'pages/club_detail/club_detail_screen.tsx'),
    ]),
] satisfies RouteConfig;
