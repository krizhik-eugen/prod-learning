import { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react';
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
    disabled?: boolean
}

export const Button = memo(({
    children,
    className,
    theme,
    isSquare,
    disabled,
    size = ButtonSize.M,
    ...restProps
}: PropsWithChildren<ButtonProps>) => {
    const mods: Record<string, boolean> = {
        [styles.square]: isSquare,
        [styles[theme]]: true,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [
                className,
                styles[theme],
                styles[size],
            ])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    );
});
