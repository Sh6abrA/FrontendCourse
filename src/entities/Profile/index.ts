import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selector/getProfileData';
import { getProfileError } from './model/selector/getProfileError';
import { getProfileIsLoading } from './model/selector/getProfileIsLoading';
import { getProfileReadOnly } from './model/selector/getProfileReadonly';
import { getProfileForm } from 'entities/Profile/model/selector/getProfileForm';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData';
import { getProfileValidateError } from 'entities/Profile/model/selector/getProfileValidateError';
export { getProfileValidateError }
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
    updateProfileData
}
export {
    ProfileCard
}
export {
    getProfileData,
    getProfileIsLoading,
    getProfileError,
    getProfileReadOnly,
    getProfileForm
}