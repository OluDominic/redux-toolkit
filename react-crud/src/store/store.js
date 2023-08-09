import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import userSlice  from '../features/users';

const store = configureStore({
    reducer: {
       users: userSlice
    }
});

export default store