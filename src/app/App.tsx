import './styles/index.scss'
import { AppRouter } from 'app/providers/router';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';


const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <Navbar />
            <AppRouter />
        </div>
    );
}

export default App;


