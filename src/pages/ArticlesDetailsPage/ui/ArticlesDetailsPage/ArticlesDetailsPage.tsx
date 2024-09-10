import { classNames }  from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticlesDetailsPageProps {
    className?: string
}

 const ArticlesDetailsPage = ({className}: ArticlesDetailsPageProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            
        </div>
    );
}
export default ArticlesDetailsPage

