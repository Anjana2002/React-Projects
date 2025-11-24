import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const addItem = createAsyncThunk(
    "items/add",
    async (formData) => {
        const token = localStorage.getItem("token");

        const res = await axios.post(
            `${import.meta.env.VITE_API_URL}/items`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return res.data;
    }
);


export const fetchItems = createAsyncThunk(
    "items/fetch",
    async () => {
        const token = localStorage.getItem("token");

        const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/items`,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return res.data;
    }
);
const itemSlice = createSlice({
    name: "items",
    initialState: { list: [], loading: false, error: null },
    extraReducers: (builder) => {
        builder
            .addCase(addItem.pending, (s) => {
                s.loading = true;
                s.success = null;
            })
            .addCase(addItem.fulfilled, (s, a) => {
                s.loading = false;
                s.list.push(a.payload);
                s.success = "Item added successfully!";
            })
            .addCase(addItem.rejected, (s, a) => {
                s.loading = false;
                s.error = "Failed to add item";
            })

            .addCase(fetchItems.fulfilled, (s, a) => {
                s.list = a.payload;
            })
    }
});
export default itemSlice.reducer;