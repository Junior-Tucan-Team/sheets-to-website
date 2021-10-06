import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from './reducers';
import rootSaga from './sagas';

const persistConfig = {
    key: 'authType',
    storage,
    whitelist: ['auth']
};

const sagaMiddleware = createSagaMiddleware();
const pReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(pReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };
