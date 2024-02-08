import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import UseTheme from 'app/providers/ThemeProvider/lib/useTheme';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
}: React.PropsWithChildren<ModalProps>) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
    const { theme } = UseTheme();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={onCloseHandler}>
                    <div className={styles.content} onClick={(e) => onContentClick(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
