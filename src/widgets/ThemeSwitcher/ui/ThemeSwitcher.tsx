import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light_1.svg';
import DarkIcon from 'shared/assets/icons/theme-dark_1.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleTheme}
            >
                {theme === Theme.LIGHT && <LightIcon />}
                {theme === Theme.DARK && <DarkIcon />}
            </Button>

        </div>
    );
});
