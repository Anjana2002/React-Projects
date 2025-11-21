import { configureStore } from "@reduxjs/toolkit";  
import counterReduce from './counterSlice';
import profileReduce from './profileSlice';
export const store = configureStore({
    reducer: {
        counter: counterReduce,
        profile: profileReduce,
    },
});