import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';


interface PageErrorProps {
    className?: string
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div data-testid="page-error" className={classNames(classes.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ButtonTheme.OUTLINE} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
}

