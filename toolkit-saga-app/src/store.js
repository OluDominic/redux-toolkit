import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit'
import catsReducer from './catState'
import catSaga from './catsSaga';

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        cats: catsReducer,
    },
    middleware: [saga]
});
saga.run(catSaga);
