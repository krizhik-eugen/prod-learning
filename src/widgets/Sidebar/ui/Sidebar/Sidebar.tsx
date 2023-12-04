import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss'
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LanguageSwitcher} from 'widgets/LanguageSwitcher';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggleCollapsed = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button className={styles.collapsed} onClick={onToggleCollapsed}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher className={styles.langSwitcher}/>
            </div>
        </div>
    );
};
