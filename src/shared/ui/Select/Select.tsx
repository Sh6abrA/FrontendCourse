import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectProps {
    className?: string;
    label?: string;
}

export const Select = ({ className, label }: SelectProps) => {
    const mods: Mods = {

    }
    return (
        <div className={classNames(cls.Select, mods, [className])}>
            {label &&
                <span className={cls.label}>
                    {label}
                </span>
            }
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
    );
}

