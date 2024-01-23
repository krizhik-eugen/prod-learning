import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpen((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onToggleModal}
            >
                {t('Login')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal onClose={onToggleModal} isOpen={isAuthModalOpen}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad consectetur deserunt dolor doloribus ea fugit ipsum iste laborum mollitia, obcaecati odit ratione veniam voluptate? Dicta ipsam minus obcaecati!
            </Modal>
        </div>
    );
};
