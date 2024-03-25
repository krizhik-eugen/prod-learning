import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import { StateSchema, ThunkConfig, ThunkExtraArg } from './config/StateSchema';
import { createReducerManager } from './config/reducerManager';

export {
    AppDispatch,
    StoreProvider,
    createReduxStore,
    StateSchema,
    createReducerManager,
    ThunkExtraArg,
    ThunkConfig,
};
