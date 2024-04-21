import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {username, password} = useSelector(getLoginState);


    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                onChange={onChangeUsername}
                autofocus
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                placeholder={t('Введите password')}
                type="text"
                className={cls.input}
                value={password}
            />
            <Button onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
})

