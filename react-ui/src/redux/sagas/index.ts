import { all } from 'redux-saga/effects';
import actionSagas from '../../models/user/sagas';
import topbarSagas from '../../modules/topbar/sagas';
import addressSagas from '../../modules/address/sagas';


function* rootSagas() {
    yield all([
        ...actionSagas,
        ...topbarSagas,
        ...addressSagas
    ]);
}

export default rootSagas;