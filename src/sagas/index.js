// vim:ts=2:sw=2:et

import { call, put, take } from 'redux-saga/effects';
import { fetchMovies } from '../apis/douban';

export function* loadMovies() {
  try {
    const movies = yield call(fetchMovies);
    yield put({ type: 'MOVIES_RECEIVED', movies});
  }
  catch (error) {
      yield put({type: 'LOAD_MOVIES_FAILED', error});
  }
}

export function* watchLoadMovies() {
  while (true) {
    console.log('taking LOAD_MOVIES ...');
    yield take('LOAD_MOVIES');
    yield call(loadMovies);
  }
}
