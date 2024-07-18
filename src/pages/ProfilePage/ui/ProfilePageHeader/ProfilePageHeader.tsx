import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")} />
            {readonly
                ?
                <Button onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t("Редактировать")}
                </Button>
                :
                <div className={cls.buttons}>
                    <Button onClick={onSave} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                        {t("Сохранить")}
                    </Button>
                    <Button onClick={onCancelEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED}>
                        {t("Отменить")}
                    </Button>
                </div>
            }
        </div>
    );
}

