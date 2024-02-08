import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);
    const onOpenModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onOpenModal}
            >
                {t('Login')}
            </Button>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModalOpen} />
        </div>
    );
};
