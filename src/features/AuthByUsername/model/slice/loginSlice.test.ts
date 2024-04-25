import { DeepPartial } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { loginActions, loginReducer } from "./loginSlice"
import { loginByUsername } from "../services/loginByUsername/loginByUsername"

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'admin'
        }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123')
        )).toEqual({ username: '123' })
    })
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'admin',
        }
        expect(loginReducer(state as LoginSchema,
            loginActions.setPassword('231'))).toEqual({ username: 'admin', password: '231' })
    });

})