import React, {lazy, Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'

const LazyAbout = lazy(() => new Promise( resolve => {
    // @ts-ignore
    // only for testing lazy loading
    setTimeout(() => resolve(import('./components/About/About')),1500)
}) );
const LazyMain = lazy(() => import('./components/Main/Main'));

const App = () => {
    return (
        <div className='app'>
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


        </div>
    );
};

export default App;