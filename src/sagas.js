import { call, put, takeLatest } from 'redux-saga/effects';
import apiService from './api';

function* getUser(action) {
    try {
        const data = yield call(apiService.getProfile, action.params.username)
        
        yield put({
            type: 'ADD_PROFILE',
            params: {
                data
            }
        })
    } catch (error) {
        
    }
}

function* mySaga() {
    yield takeLatest('FETCH_USER_PROFILE', getUser)
}

export default mySaga;