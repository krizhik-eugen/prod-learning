import { RouteProps } from 'react-router-dom';
import Main from 'pages/Main';
import About from 'pages/About';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    { path: RoutePath[AppRoutes.MAIN], element: <Main /> },
    { path: RoutePath[AppRoutes.ABOUT], element: <About /> },
    { path: RoutePath[AppRoutes.NOT_FOUND], element: <NotFoundPage /> },
];
