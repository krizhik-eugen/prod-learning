import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    isSquare?: boolean;
    size?: string;
}

export const Button = ({
    children,
    className,
    theme,
    isSquare,
    size = ButtonSize.M,
    ...restProps
}: PropsWithChildren<ButtonProps>) => (
    <button
        type="button"
        className={classNames(styles.Button, {
            [styles.square]: isSquare,
            [styles[theme]]: true,
            [styles[size]]: true,
        }, [
            className,
            styles[theme],
            styles[size],
        ])}
        {...restProps}
    >
        {children}
    </button>
);
