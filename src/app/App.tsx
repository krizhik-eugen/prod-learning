import UseTheme from 'app/providers/ThemeProvider/lib/useTheme';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import './styles/index.scss'
import {Navbar} from 'widgets/Navbar';

const App = () => {

    const {theme, toggleTheme} = UseTheme()

    return (
        <div className={classNames('App', {}, [theme])}>

            <Navbar/>
            <AppRouter/>

            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};

export default App;