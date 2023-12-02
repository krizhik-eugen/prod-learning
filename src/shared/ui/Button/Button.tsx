import {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const Button = ({children, className, theme, ...restProps}: PropsWithChildren<ButtonProps>) => {
    return (
        <button className={classNames(styles.Button, {}, [className, styles[theme]])} {...restProps}>
            {children}
        </button>
    );
};
