import UseTheme from 'app/providers/ThemeProvider/lib/useTheme';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import './styles/index.scss'
import {Navbar} from 'widgets/Navbar';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';

const App = () => {
    const {theme} = UseTheme()


    return (
        <div className={classNames('App', {}, [theme])}>

            <Navbar/>
            <div>
            </div>
            <AppRouter/>

        </div>
    );
};

export default App;