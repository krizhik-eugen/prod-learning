import {lazy} from 'react';

export const LazyMain = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // only for testing lazy loading
    setTimeout(() => resolve(import('./Main')), 1500)
}));
