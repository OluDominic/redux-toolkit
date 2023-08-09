import {createSlice} from '@reduxjs/toolkit'
import { UsersData } from './fakeData';

const initialState = {
    value: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, username } = action.payload
            state.value.push({id: Date.now(), name, username})
        },
         deleteUser: (state, action)=> {
            state.value = state.value.filter(value => value.id !== action.payload)
        },
         updateUser: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id) {
                    user.username = action.payload.username
                }
            })
        }
    }
});

export const {addUser, deleteUser, updateUser} = userSlice.actions
export default userSlice.reducer