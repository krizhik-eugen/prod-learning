import UseTheme from 'app/providers/ThemeProvider/lib/useTheme';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import './styles/index.scss'
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';

const App = () => {
    const {theme} = UseTheme()


    return (
        <div className={classNames('App', {}, [theme])}>
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;