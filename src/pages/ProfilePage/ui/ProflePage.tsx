import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProflePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProflePage = ({ className }: ProflePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard/>
                
            </div>
        </DynamicModuleLoader>

    );
}

export default ProflePage;

