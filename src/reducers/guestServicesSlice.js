import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { message } from "antd";
import {
  getWaterConfig,
  lapDatCoQuan,
  lapDatTuNhan,
} from "../services/apis/guestServies";

//1.tạo hợp đồng lắp đặt cho tư nhân
const contractInstallForIndividualSlice = createSlice({
  name: "createInsatllForIndividual",
  initialState: {
    createInsatllForIndividual: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLapDatTuNhan.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLapDatTuNhan.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createInsatllForIndividual = action.payload;
        message.success("Gửi yêu cầu thành công");
      })
      .addCase(fetchLapDatTuNhan.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        message.error("Gửi thất bại ! Vui lòng thử lại");
      });
  },
});
export const fetchLapDatTuNhan = createAsyncThunk(
  "createInsatllForIndividual/fetchLapDatTuNhan",
  async (body, { rejectWithValue }) => {
    try {
      const response = await lapDatTuNhan(body);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//2. tạo hợp đồng lắp đặt cho cơ quan
const contractInstallForAgentlSlice = createSlice({
  name: "createInsatllForAgent",
  initialState: {
    createInsatllForAgent: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLapDatCoQuan.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLapDatCoQuan.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createInsatllForAgent = action.payload;
        message.success("Gửi yêu cầu thành công");
      })
      .addCase(fetchLapDatCoQuan.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        message.error("Gửi thất bại ! Vui lòng thử lại");
      });
  },
});
export const fetchLapDatCoQuan = createAsyncThunk(
  "createInsatllForAgent/fetchLapDatCoQuan",
  async (body, { rejectWithValue }) => {
    try {
      const response = await lapDatCoQuan(body);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//List Water Config
const listWaterConfigSlice = createSlice({
  name: "listWaterConfig",
  initialState: {
    listWaterConfig: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetGetListWaterConfig.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetGetListWaterConfig.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listWaterConfig = action.payload;
      })
      .addCase(fetGetListWaterConfig.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const fetGetListWaterConfig = createAsyncThunk(
  "listWaterConfig/fetGetListWaterConfig",
  async (id) => {
    try {
      const response = await getWaterConfig(id);
      return response;
    } catch (error) {
      // return error
    }
  }
);

const guestServiceReducer = combineReducers({
  createContractInstallForIndividual: contractInstallForIndividualSlice.reducer,
  createContractInstallForAgent: contractInstallForAgentlSlice.reducer,
  listWaterConfig: listWaterConfigSlice.reducer,
});

export default guestServiceReducer;
