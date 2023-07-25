import { combineReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailOverView, getOverview, updateNoteContact, updateStatusWaterBill } from "../services/apis/overview";


const initialState = {
    overViewGet: null,
    status: 'idle',
    error: null
};

const overViewSlice = createSlice({
    name: 'overview',
    initialState,
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchOverView.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOverView.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.overViewGet = action.payload;
            })
            .addCase(fetchOverView.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

const updateWaterBillSlice = createSlice({
    name: 'updateWater' ,
    initialState: {
        postList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpdateWaterBill.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUpdateWaterBill.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.updateWater = action.payload
        })
        .addCase(fetchUpdateWaterBill.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

const updateNoteContactSlice = createSlice({
    name: 'updateNoteContact' ,
    initialState: {
        postList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpdateNoteContact.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUpdateNoteContact.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.updateNoteContact = action.payload
        })
        .addCase(fetchUpdateNoteContact.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

const overViewDetailsSlice = createSlice({
    name: 'overviewDetails' ,
    initialState: {
        postList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDetailsOverView.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchDetailsOverView.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.overviewDetails = action.payload
        })
        .addCase(fetchDetailsOverView.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

//OverView
export const fetchOverView = createAsyncThunk(
    "overview/fetchOverView", async(
        body
    , {rejectWithValue}) => {
        try {
            const response = await getOverview(
                body
            );
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

//detail overview
export const fetchDetailsOverView = createAsyncThunk(
    "overviewDetails/fetchDetailsOverView", async(
        body
    , {rejectWithValue}) => {
        try {
            const response = await getDetailOverView(body);
            // debugger;
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

//updateStatusWaterBill
export const fetchUpdateWaterBill = createAsyncThunk(
    "updateWater/fetchUpdateWaterBill", async(
        body
    , {rejectWithValue}) => {
        try {
            const response = await updateStatusWaterBill(body);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
//updateNoteContact
export const fetchUpdateNoteContact = createAsyncThunk(
    "updateNoteContact/fetchUpdateNoteContact", async(
        body
    , {rejectWithValue}) => {
        try {
            const response = await updateNoteContact(body);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
const overViewReducer = combineReducers({
    overViewGet : overViewSlice.reducer,
    overViewDetail : overViewDetailsSlice.reducer,
    updateWater : updateWaterBillSlice.reducer,
    updateNote : updateNoteContactSlice.reducer,
})


export default overViewReducer;

