import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/Users";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}