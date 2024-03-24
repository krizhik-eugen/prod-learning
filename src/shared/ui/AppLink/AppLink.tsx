import { memo, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink = memo(({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...restProps
}: PropsWithChildren<AppLinkProps>) => (
    <Link
        to={to}
        className={classNames(styles.AppLink, {}, [className, styles[theme]])}
        {...restProps}
    >
        {children}
    </Link>
));
