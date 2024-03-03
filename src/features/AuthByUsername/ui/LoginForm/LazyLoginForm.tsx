import { FC, lazy } from 'react';
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export const LazyLoginForm = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // only for testing lazy loading
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
