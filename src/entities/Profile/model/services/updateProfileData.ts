import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';
import { getProfileForm } from '../selector/getProfileForm';


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
)

