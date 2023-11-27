import React from 'react';
import {Link} from 'react-router-dom';
import UseTheme from 'app/providers/ThemeProvider/lib/useTheme';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import './styles/index.scss'

const App = () => {

    const {theme, toggleTheme} = UseTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
            </div>
            <AppRouter/>

            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};

export default App;