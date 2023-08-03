import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { adminAddProduct, adminDeleteProduct } from '../services/apis/products';

const addproductSlice = createSlice({
    name: 'addProduct',
    initialState: {
        addProduct: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchPosition
            .addCase(fetchAddProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAddProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.addProduct = action.payload;
            })
            .addCase(fetchAddProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const fetchAddProduct = createAsyncThunk('addPosition/fetchAddProduct', async (requestBody, { rejectWithValue }) => {
    try {
        const response = await adminAddProduct(requestBody);
        debugger;
        return response;
    } catch (error) {
        debugger;
        return rejectWithValue(error);
    }
});

export const fetchDeleteProduct = createAsyncThunk('deletePosition/fetchDeleteProduct', async (requestBody, { rejectWithValue }) => {
    try {
        const response = await adminDeleteProduct(requestBody);
        debugger;
        return response;
    } catch (error) {
        debugger;
        return rejectWithValue(error);
    }
});

export default addproductSlice.reducer;
