import {lazy} from 'react';

export const LazyAbout = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // only for testing lazy loading
    setTimeout(() => resolve(import('./About')), 1500)
}));
