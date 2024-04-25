import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

type ActionCreatorType<Return, Arg, Rejected> 
    = (arg: Arg) 
    => AsyncThunkAction<Return, Arg, { rejectValue: Rejected }>


export class TestAsyncThunk<Return, Arg, Rejected> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, Rejected>;
    constructor(actionCreator: ActionCreatorType<Return, Arg, Rejected>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async CallThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}