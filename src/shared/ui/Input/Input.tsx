import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' >

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void
    placeholder?: string;
    autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        autofocus,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [caretPosition, setCaretPosition] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref?.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelectHandler = (e: any) => {
        setCaretPosition(e?.target.selectionStart || 0);
    };

    return (
        <div className={classNames(styles.InputWrapper, {}, [className])}>
            {placeholder
                && (
                    <div className={styles.placeholder}>
                        {`${placeholder} >`}
                    </div>
                )}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    onSelect={onSelectHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                { isFocused
                    && (
                        <span
                            style={{ left: `${caretPosition * 9}px` }}
                            className={styles.caret}
                        />
                    )}
            </div>
        </div>
    );
});
