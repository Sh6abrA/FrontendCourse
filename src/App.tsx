import './styles/index.scss'
import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={'app ' + theme}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/about">О сайте</Link>
            <Link to="/">Гдавная</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;