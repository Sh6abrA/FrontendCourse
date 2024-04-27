import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore, AppDispatch } from "./config/store";
import type { StateSchema } from "./config/StateSchema";
import { ReduxStoreWithManager, ThunkExtraArgument, ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
export { ReduxStoreWithManager}

export {
    ThunkExtraArgument,
    ThunkConfig,
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch
}