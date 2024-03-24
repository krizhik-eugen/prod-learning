import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);
    const onOpenModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);
    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModalOpen(false);
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={styles.links}
                    onClick={onLogOut}
                >
                    {t('Log out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onOpenModal}
            >
                {t('Login')}
            </Button>
            {isAuthModalOpen && <LoginModal onClose={onCloseModal} isOpen={isAuthModalOpen} />}
        </div>
    );
});
