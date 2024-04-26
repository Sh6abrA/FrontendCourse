/* eslint-disable no-unused-vars */
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';
import { memo } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    l = 'size_l',
    m = 'size_m',
    xl = 'size_xl'
}


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: React.ReactNode;
}

export const Button = memo ((props: ButtonProps) => {
    const { 
        className, 
        children,
        square,
        size = ButtonSize.m,
        theme = ButtonTheme.CLEAR,
        disabled = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [classes[theme]]: true,
        [classes.square]: square,
        [classes[size]]: true,
        [classes.disabled]: disabled,
    }
    return (
        <button 
            className={classNames(classes.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}    
        >
            {children}
        </button>
    );
})

