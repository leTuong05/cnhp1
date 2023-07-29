import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { GetList } from '../services/apis/role';

const roleSlice = createSlice({
    name: 'role',
    initialState: {
        getRole: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchRole.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRole.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getRole = action.payload;
            })
            .addCase(fetchRole.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                message.error('Cập nhật thẻ thất bại!');
            });
    }
});

export const fetchRole = createAsyncThunk('role/fetchRole', async (requestBody) => {
    const response = await GetList(requestBody);
    return response;
});

export default roleSlice.reducer;
