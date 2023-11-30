import {PropsWithChildren} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss'
import {Link, LinkProps} from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink = ({
                            className,
                            children,
                            to,
                            theme = AppLinkTheme.PRIMARY,
                            ...restProps}: PropsWithChildren<AppLinkProps>) => {
    return (
        <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...restProps}>
            {children}
        </Link>
    );
};
