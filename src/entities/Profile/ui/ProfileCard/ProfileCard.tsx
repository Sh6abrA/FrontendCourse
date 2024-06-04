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
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading
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
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                />
            </div>

        </div>
    );
}

