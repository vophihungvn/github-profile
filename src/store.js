import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import reducer from './reducer'
import mySaga from './sagas'

 const sagaMiddleware = createSaga()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default store;