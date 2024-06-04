import { StateSchema } from "app/providers/StoreProvider"
import { getLoginPassword } from "./getLoginPassword"

describe('getLoginError.test', () => {
    test('should return 123', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: true,
                password: "123",
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    });
})