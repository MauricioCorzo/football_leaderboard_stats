import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
    layout('routes/RootLayout.tsx', [
        index('routes/home/home_screen.tsx'),
        route('rankings', 'routes/rankings/rankings_screen.tsx'),
        route('champions', 'routes/champions/champions_screen.tsx'),
    ]),
] satisfies RouteConfig;
