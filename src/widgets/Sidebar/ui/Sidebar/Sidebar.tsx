import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher isShort={collapsed} className={styles.langSwitcher} />
            </div>
        </div>
    );
});
