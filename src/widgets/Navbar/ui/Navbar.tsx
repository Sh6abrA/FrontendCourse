import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';



export const Navbar = () => {
    return (
        <div className={classNames(classes.Navbar)}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about" className={classes.mainLink}>
                    О сайте
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    Главная
                </AppLink>
            </div>

        </div>
    );
}

