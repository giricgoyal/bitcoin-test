import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import api from '../../common/api';
function* onActivate(params) {
    const searchParams = new URLSearchParams(params.search);
    const addressId = searchParams.get('addressId');
    const {data} = yield call(api.v1.get, `address/${addressId}/transactions`)
    yield put({
        type: actionTypes.FETCH_ADDRESS_TRANSACTIONS,
        payload: data
    });
}

function* onDeactivate() {
    
}

export const activateSaga = takeEvery(actionTypes.ACTIVATE, onActivate);
export const deactivateSaga = takeEvery(actionTypes.DEACTIVATE, onDeactivate);

export default [
    activateSaga,
    deactivateSaga
];
