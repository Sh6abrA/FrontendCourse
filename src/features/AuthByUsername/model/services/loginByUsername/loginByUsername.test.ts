import axios from "axios"
import { loginByUsername } from "./loginByUsername";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { userActions } from "entities/Users";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true)
describe('loginByUsername', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // })

    // test('post success', async () => {
    //     const userAction = {username: '123', id: '1'};
    //     mockedAxios.post.mockReturnValue(Promise.resolve({data: userAction}));
        
    //     const action = loginByUsername({username: '123', password: '123'});
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userAction));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toBe(userAction);
    // });
    test('post error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
        
        const thunk = new TestAsyncThunk(loginByUsername);
        const action = await thunk.CallThunk({username: '123', password: '123'});

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toBe('error');
    });


    test('post success', async () => {
        const userAction = {username: '123', id: '1'};
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userAction}));
        const thunk = new TestAsyncThunk(loginByUsername);
        const action = await thunk.CallThunk({username: '123', password: '123'});

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userAction));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toBe(userAction);
    });
})