import { combineReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreOrUp, GetCategory, GetFunc, GetFuncByCategory } from '../services/apis/function';
import { message } from 'antd';
const categorySlice = createSlice({
    name: 'category',
    initialState: {
        getCategory: null,
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchCategory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getCategory = action.payload;
                message.success('Cập nhật thẻ thành công!');
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                message.error('Cập nhật thẻ thất bại!');
            });
    }
});

const funcByCategorySlice = createSlice({
    name: 'funcByCategory',
    initialState: {
        getFuncByCategory: null,
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchCategory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getFuncByCategory = action.payload;
                message.success('Cập nhật thẻ thành công!');
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                message.error('Cập nhật thẻ thất bại!');
            });
    }
});

const funcSlice = createSlice({
    name: 'function',
    initialState: {
        getFunc: null,
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchFunction.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFunction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getFunc = action.payload;
                message.success('Cập nhật thẻ thành công!');
            })
            .addCase(fetchFunction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                message.error('Cập nhật thẻ thất bại!');
            });
    }
});

export const fetchCategory = createAsyncThunk('category/fetchCategory', async (requestBody, { rejectWithValue }) => {
    try {
        const response = await GetCategory(requestBody);
        return response;
    } catch (error) {
        debugger;
        return rejectWithValue(error);
    }
});

export const fetchFuncByCategory = createAsyncThunk('funcByCategory/fetchFuncByCategory', async (CategoryID, { rejectWithValue }) => {
    try {
        const response = await GetFuncByCategory(CategoryID);
        return response;
    } catch (error) {
        debugger;
        return rejectWithValue(error);
    }
});

export const fetchFunction = createAsyncThunk('function/fetchFunction', async (requestBody, { rejectWithValue }) => {
    try {
        const response = await GetFunc(requestBody);
        return response;
    } catch (error) {
        debugger;
        return rejectWithValue(error);
    }
});

export const fetchCreOrUp = createAsyncThunk('creOrUpdate/fetchCreOrUp', async (requestBody, { rejectWithValue }) => {
    try {
        const response = await CreOrUp(requestBody);
        return response;
    } catch (error) {
        debugger;
        return rejectWithValue(error);
    }
});

const categoryReducer = combineReducers({
    category: categorySlice.reducer,
    funcByCategory: funcByCategorySlice.reducer,
    function: funcSlice.reducer
});

export default categoryReducer;
