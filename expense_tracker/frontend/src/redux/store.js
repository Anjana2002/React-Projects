import { configureStore } from "@reduxjs/toolkit";  
import counterReduce from './counterSlice';
import profileReduce from './profileSlice';
import itemReduce from './itemSlice';
export const store = configureStore({
    reducer: {
        counter: counterReduce,
        profile: profileReduce,
        items: itemReduce,
    },
});