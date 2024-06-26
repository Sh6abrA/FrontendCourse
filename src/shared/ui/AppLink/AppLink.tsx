import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}


interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme;
    children?: React.ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, 
        className, 
        children, 
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps
    } = props;


    return (
        <Link 
            to={to} 
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            {...otherProps}    
        >
            {children}
        </Link>
    );
})

