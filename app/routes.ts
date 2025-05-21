import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [layout('routes/RootLayout.tsx', [index('routes/home.tsx')])] satisfies RouteConfig;
