/* eslint-disable no-unused-vars */
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';
import { FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const { 
        className, 
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;


    return (
        <button 
            className={classNames(classes.Button, {}, [className, classes[theme]])}
            {...otherProps}    
        >
            {children}
        </button>
    );
}

