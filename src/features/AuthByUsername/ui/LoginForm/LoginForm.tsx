import {classNames}  from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation();


    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type="text" />
            <input type="text" />
            <button>{t('Войти')}</button>
        </div>
    );
}

