import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { getProfileData } from 'entities/Profile/model/selector/getProfileData';
import { getProfileError } from './model/selector/getProfileError';
import { getProfileIsLoading } from './model/selector/getProfileIsLoading';
export {
    Profile,
    ProfileSchema
} from './model/types/profile';

export {
    profileReducer,
    profileActions
} from './model/slice/profileSlice';

export {
    fetchProfileData
} from './model/services/fetchProfileData'

export {
    ProfileCard
}
export{
    getProfileData,
    getProfileIsLoading,
    getProfileError
}