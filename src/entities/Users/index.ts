import {userReducer, userActions} from './model/slice/userSlice';
import {UserSchema, User} from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData';
import { getUserInited } from 'entities/Users/model/selectors/getUserInited';
export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
    getUserInited
}
