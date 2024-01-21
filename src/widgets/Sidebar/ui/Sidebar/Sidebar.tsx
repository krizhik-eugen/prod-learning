import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggleCollapsed = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, {
                [styles.collapsed]: collapsed,
            }, [className])}
        >
            <Button
                size={ButtonSize.L}
                className={styles.collapseBtn}
                onClick={onToggleCollapsed}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                isSquare
            >
                { collapsed ? '>' : '<' }
            </Button>
            <div className={styles.items}>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}

                >
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>
                        {t('Main page')}
                    </span>
                </AppLink>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>
                        {t('About')}
                    </span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher isShort={collapsed} className={styles.langSwitcher} />
            </div>
        </div>
    );
};
