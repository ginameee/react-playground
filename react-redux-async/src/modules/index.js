import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
// import sample from './sampleThunk';
// import counter from './counterThunk';
import counter, { counterSaga } from './counterSaga';
import sample, { sampleSaga } from './sampleSaga';
import loading from './loading';

const rootReducer = combineReducers({
    sample,
    counter,
    loading
});

export function* rootSaga() {
    yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;