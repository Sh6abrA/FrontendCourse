import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { useMemo } from 'react';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const mods: Mods = {

    }

    const styles = useMemo(() => {
        return {
            width: size || 100,
            height: size || 100
        }
    }, [size])
    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
}

