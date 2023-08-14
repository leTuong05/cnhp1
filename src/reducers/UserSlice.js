import { combineReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { deleteUser, getListUser, getUserDirectory } from '../services/apis/userDirectory';

const userDirectSlice = createSlice({
    name: 'userDirect',
    initialState: {
        getUser: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getUser = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                message.error('Cập nhật thẻ thất bại!');
            });
    }
});

export const fetchUser = createAsyncThunk('userDirect/fetchUser', async (body, { rejectWithValue }) => {
    try {
        const response = await getListUser(body);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchDeleteUser = createAsyncThunk('deleteUserDirect/fetchDeleteUser', async (UserID, { rejectWithValue }) => {
    try {
        const response = await deleteUser(UserID);
        debugger;
        return response;
    } catch (error) {
        debugger;
        return rejectWithValue(error);
    }
});
export default userDirectSlice;
