import {RouteProps} from 'react-router-dom';
import Main from 'pages/Main';
import About from 'pages/About';


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}


export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: RouteProps[] = [
    {path: RoutePath[AppRoutes.MAIN], element: <Main/> },
    {path: RoutePath[AppRoutes.ABOUT], element: <About/>}
]