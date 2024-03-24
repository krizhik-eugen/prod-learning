import { lazy } from 'react';

export const LazyProfilePage = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // only for testing lazy loading
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
