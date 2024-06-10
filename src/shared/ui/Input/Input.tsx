/* eslint-disable react/display-name */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';



type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly = false,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }
    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    }
    useEffect(() => {
        if(autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus])

    const mods: Record<string, boolean> = {
        [cls.readonly]: readonly,
    }
    const isCaretVisible = isFocused && !readonly;

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder &&
                <div className={cls.placeholder}>
                    {placeholder + ">"}
                </div>
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && <span style={{ left: `${caretPosition * 9}px` }} className={cls.caret}></span>}
            </div>
        </div>
    );
})

