import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';


export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly
    } = props
    const optionList = useMemo(() => {
        return options?.map((option) => (
            <option
                className={cls.option}
                value={option.value}
                key={option.value}
            >
                {option.content}
            </option>
        ))
    }, [options])
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }
    const mods: Mods = {

    }
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label &&
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            }
            <select
                className={cls.select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
})

