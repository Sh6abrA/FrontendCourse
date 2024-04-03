import './styles/index.scss'
import { AppRouter } from 'app/providers/router';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {hovered: true, pg: true}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/about">О сайте</Link>
            <Link to="/">Гдавная</Link>
            <AppRouter />
        </div>
    );
}

export default App;