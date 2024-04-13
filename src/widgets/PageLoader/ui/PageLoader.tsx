import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div data-testid="page-loader" className={classNames(classes.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
}

