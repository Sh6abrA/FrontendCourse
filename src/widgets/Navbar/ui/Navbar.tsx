/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/Users';




export const Navbar = memo(() => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, [])

    const onShow = useCallback(() => {
        setIsAuthModal(true);
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])


    if (authData) {
        return (
            <div className={classNames(classes.Navbar)}>
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={classes.links}
                >
                    {t("Выйти")}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(classes.Navbar)}>
            <Button
                onClick={onShow}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={classes.links}
            >
                {t("Войти")}
            </Button>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onClose}
            />}
        </div>
    );
})

