import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]
interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    
    
    const {children, reducers, removeAfterUnmount} = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
            store.reducerManager.add(reducerKey, reducer);
            dispatch({type: `@INIT ${reducerKey}`, payload: '123'});

        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(reducerKey);
                    dispatch({type: `@REMOVE ${reducerKey}`, payload: '123'});
        
                })   
            }
        }
        // eslint-disable-next-line
    }, []);
    
    return (
        <>
            {children}
        </>
    );
}

