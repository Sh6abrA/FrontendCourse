import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selector/getProfileData';
import { getProfileIsLoading } from '../../model/selector/getProfileIsLoading';
import { getProfileError } from '../../model/selector/getProfileError';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly = true,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity
    } = props;
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className, cls.loading])}>
                <Loader />
            </div>
        )
    }

    if(error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title={t("Произошла ошибка при загрузке профиля")} text={t("Попробуйте обновить страницу")} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t("Ваше имя")}
                    className={cls.input}
                    readonly = {readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                    readonly = {readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    placeholder={t("Ваше возраст")}
                    className={cls.input}
                    readonly = {readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t("Город")}
                    className={cls.input}
                    readonly = {readonly}
                    onChange={onChangeCity}
                />
            </div>

        </div>
    );
}

