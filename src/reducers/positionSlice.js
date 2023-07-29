import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddPosition, DeletePosition, GetList } from '../services/apis/positions';
import { UpdateListPosition } from '../services/apis/positions';
import { message } from 'antd';

const initialState = {
    positionGet: null,
    loading: false,
    error: null
};

const positionSlice = createSlice({
    name: 'position',
    initialState,
    extraReducers: (builder) => {
        builder
            //fetchPosition
            .addCase(fetchPosition.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosition.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.positionGet = action.payload;
            })
            .addCase(fetchPosition.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

//Slide update
// const updatePosotionSlice = createSlice({
//     name: 'updatePosition',
//     initialState: {
//         updatePosition: [],
//         isLoading: false,
//         error: null
//     },
//     extraReducers: (builder) => {
//         builder
//             //fetchOverView
//             .addCase(fetUpdatePosition.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(fetUpdatePosition.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.updatePosition = action.payload;
//                 message.error('Cập nhật thẻ thành công!');
//             })
//             .addCase(fetUpdatePosition.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.error.message;
//                 message.error('Cập nhật thẻ thất bại!');
//             });
//     }
// });

//Slice delete
const delelePositionSlice = createSlice({
    name: 'deletePosition',
    initialState: {
        deletePosition: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchDeletePosition.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchDeletePosition.fulfilled, (state, action) => {
                state.isLoading = false;
                state.deletePosition = action.payload;
                message.error('Cập nhật thẻ thành công!');
            })
            .addCase(fetchDeletePosition.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                message.error('Cập nhật thẻ thất bại!');
            });
    }
});

// Slide add
const addPositionSlice = createSlice({
    name: 'addPosition',
    initialState: {
        addPosition: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchAddPosition.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAddPosition.fulfilled, (state, action) => {
                state.isLoading = false;
                state.addPosition = action.payload;
                message.error('Cập nhật thẻ thành công!');
            })
            .addCase(fetchAddPosition.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                message.error('Cập nhật thẻ thất bại!');
            });
    }
});
export const fetchPosition = createAsyncThunk('position/fetchPosition', async (DepartmentID, { rejectWithValue }) => {
    try {
        const response = await GetList(DepartmentID);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetUpdatePosition = createAsyncThunk('updatePosition/fetUpdatePosition', async (requestBody) => {
    const response = await UpdateListPosition(requestBody);
    return response;
});

export const fetchDeletePosition = createAsyncThunk('deletePosition/fetchDeletePosition', async (PositionID, { rejectWithValue }) => {
    try {
        const response = await DeletePosition(PositionID);
        // debugger;
        return response;
    } catch (error) {
        // debugger;
        return rejectWithValue(error);
    }
});

export const fetchAddPosition = createAsyncThunk('addPosition/fetchAddPosition', async (requestBody, { rejectWithValue }) => {
    try {
        const response = await AddPosition(requestBody);
        // debugger;
        return response;
    } catch (error) {
        // debugger;
        return rejectWithValue(error);
    }
});

export default positionSlice.reducer;
