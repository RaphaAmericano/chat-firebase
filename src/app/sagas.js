import { takeLatest,takeEvery, take } from 'redux-saga/effects'
import { setChatUID } from '../features/selectedContact/selectedContactSagas'
import { setContactUID } from '../features/selectedContact/selectedContactActions'

export default function* watcherSaga(){
    // yield takeEvery('SET_CONTACT_UID', setChatUID)
}