import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore } from "./config/store";
import type { StateSchema } from "./config/StateSchema";
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
export { ReduxStoreWithManager}

export {
    StoreProvider,
    createReduxStore,
    StateSchema
}