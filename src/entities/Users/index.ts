import {userReducer, userActions} from './model/slice/userSlice';
import {UserSchema, User} from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData';
export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData
}
