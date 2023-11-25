import React, {lazy, Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import UseTheme from 'app/providers/ThemeProvider/lib/useTheme';
import {classNames} from 'shared/lib/classNames/classNames';
import About from 'pages/About';
import Main from 'pages/Main';

const App = () => {

    const {theme, toggleTheme} = UseTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
            </div>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </Suspense>

            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};

export default App;