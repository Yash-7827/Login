import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import authReducer from './Reducers/authReducer';
import authSaga from './Sagas/loginSaga';
import signupReducer from './Reducers/signupReducer';
import rootSaga from './Sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    auth: authReducer,
    signup: signupReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, logger)
    )
);
sagaMiddleware.run(rootSaga);

export default store;