import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <ThemeSwitcher/>

            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={styles.mainLink}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY}  to='/about'>About</AppLink>
            </div>
        </div>
    );
};
