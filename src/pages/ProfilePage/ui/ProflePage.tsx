import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, getProfileReadOnly, profileActions, ProfileCard, profileReducer } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProflePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProflePage = ({ className }: ProflePageProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadOnly)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])
    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard onChangeFirstname={onChangeFirstname}  onChangeLastname={onChangeLastname} readonly={readonly} data={data} isLoading={isLoading} error={error} />
            </div>
        </DynamicModuleLoader>

    );
}

export default ProflePage;

