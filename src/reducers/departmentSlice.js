import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  GetDepartment,
  GetDepartmentParent,
} from "../services/apis/department";
import { message } from "antd";

const initialState = {
  departmentGet: null,
  loading: false,
  error: null,
};

const departmentSlice = createSlice({
  name: "department",
  initialState,
  extraReducers: (builder) => {
    builder
      //fetchPosition
      .addCase(fetchDepartment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDepartment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.departmentGet = action.payload;
      })
      .addCase(fetchDepartment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const departmentParentSlice = createSlice({
  name: "departmentParent",
  initialState: {
    departmentParentGet: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //fetchPosition
      .addCase(fetchDepartmentParent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDepartmentParent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.departmentParentGet = action.payload;
      })
      .addCase(fetchDepartmentParent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchDepartment = createAsyncThunk(
  "department/fetchDepartment",
  async (requestBody, { rejectWithValue }) => {
    try {
      const response = await GetDepartment(requestBody);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchDepartmentParent = createAsyncThunk(
  "departmentParent/fetchDepartmentParent",
  async (requestBody, { rejectWithValue }) => {
    try {
      const response = await GetDepartmentParent(requestBody);
    //   debugger;
      return response;
    } catch (error) {
    //   debugger;
      return rejectWithValue(error);
    }
  }
);
const departmentReducer = combineReducers({
  department: departmentSlice.reducer,
  departmentParent: departmentParentSlice.reducer,
});
export default departmentReducer;
