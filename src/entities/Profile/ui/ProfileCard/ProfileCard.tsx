import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selector/getProfileData';
import { getProfileIsLoading } from '../../model/selector/getProfileIsLoading';
import { getProfileError } from '../../model/selector/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const { t } = useTranslation('profile');
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t("Профиль")} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t("Редактировать")}
                </Button>
            </div>
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

