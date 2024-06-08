import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selector/getProfileData';
import { getProfileError } from './model/selector/getProfileError';
import { getProfileIsLoading } from './model/selector/getProfileIsLoading';
import { getProfileReadOnly } from './model/selector/getProfileReadonly';
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
    getProfileError,
    getProfileReadOnly
}