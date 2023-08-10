import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './catState';

function* workGetCatsCatch() {
    const cats = yield call(()=> fetch('https://api.thecatapi.com/v1/breeds'))
    const formattedcats = yield cats.json();
    const formattedcatsShortened = formattedcats.slice(0,10);
    yield put(getCatsSuccess(formattedcatsShortened))
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCatsCatch)
}

export default catSaga;