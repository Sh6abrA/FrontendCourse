import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

interface DynamicModuleLoaderProps {
    children: ReactNode;
    name: StateSchemaKey;
    reducer: Reducer;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    
    
    const {children, name: key, reducer} = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        store.reducerManager.add(key, reducer);

        dispatch({type: `@INIT ${key}`, payload: '123'});
        return () => {
            store.reducerManager.remove(key);
            dispatch({type: `@DESTROY ${key}`, payload: '123'});
        }
        // eslint-disable-next-line
    }, []);
    
    return (
        <>
            {children}
        </>
    );
}

