import { combineReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { GetList, GetListRoleId } from '../services/apis/role';

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

const roleIdSlice = createSlice({
    name: 'roleId',
    initialState: {
        getRoleId: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchRoleId.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRoleId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getRoleId = action.payload;
            })
            .addCase(fetchRoleId.rejected, (state, action) => {
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

export const fetchRoleId = createAsyncThunk('roleId/fetchRoleId', async (RoleID, { rejectWithValue }) => {
    try {
        const response = await GetListRoleId(RoleID);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const roleReducer = combineReducers({
    role: roleSlice.reducer,
    roleId: roleIdSlice.reducer
});

export default roleReducer;
