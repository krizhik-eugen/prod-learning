import React, {lazy, Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import UseTheme from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';

const LazyAbout = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // only for testing lazy loading
    setTimeout(() => resolve(import('./components/About/About')), 1500)
}));
const LazyMain = lazy(() => import('./components/Main/Main'));


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
                    <Route path='/' element={<LazyMain/>}/>
                    <Route path='/about' element={<LazyAbout/>}/>
                </Routes>
            </Suspense>

            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};

export default App;