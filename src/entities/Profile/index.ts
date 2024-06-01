import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
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