import { call, put, takeEvery } from 'redux-saga/effects';
import { getUsersList } from './api';

function* getRandomUserList() {
  console.log('getting users')
  try {
    const userList = yield call(getUsersList)
    yield put({type: 'ADD_USERS', userList})
  }
  catch (err) {
    yield put ({type: 'GET_RANDOM_USER_LIST_ERROR'})
  }
}

export default function* rootSaga() {
	yield takeEvery('GET_RANDOM_USER_LIST', getRandomUserList);
}
