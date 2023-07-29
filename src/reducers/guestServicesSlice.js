import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { message } from "antd";
import {
  contractInstallForAgent,
  contractInstallForIndividual,
  contractMoveForAgent,
  contractMoveForIndividual,
} from "../services/apis/guestServies";

//1.tạo hợp đồng lắp đặt cho tư nhân
const contractInstallForIndividualSlice = createSlice({
  name: "createContractInstallForIndividual",
  initialState: {
    createContractInstallForIndividual: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContractInstallForIndividual.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContractInstallForIndividual.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createContractInstallForIndividual = action.payload;
        message.success("Gửi thành công");
      })
      .addCase(fetchContractInstallForIndividual.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        message.error("Gửi thất bại ! Vui lòng thử lại");
      });
  },
});

//2.tạo hợp đồng lắp đặt cho cơ quan
const contractInstallForAgentSlice = createSlice({
  name: "createContractInstallForAgent",
  initialState: {
    createContractInstallForAgent: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContractInstallForAgent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContractInstallForAgent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createContractInstallForAgent = action.payload;
        message.success("Gửi thành công");
      })
      .addCase(fetchContractInstallForAgent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        message.error("Gửi thất bại ! Vui lòng thử lại");
      });
  },
});

//3.tạo hợp đồng di chuyển nc cho tư nhân
const contractMoveForIndividualSlice = createSlice({
  name: "createContractMoveForIndividual",
  initialState: {
    createContractMoveForIndividual: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContractMoveForIndividual.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContractMoveForIndividual.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createContractMoveForIndividual = action.payload;
        message.success("Gửi thành công");
      })
      .addCase(fetchContractMoveForIndividual.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        message.error("Gửi thất bại ! Vui lòng thử lại");
      });
  },
});
//4.tạo hợp đồng di chuyển nc cho cơ quan
const contractMoveForAgentSlice = createSlice({
  name: "createContractMoveForAgent",
  initialState: {
    createContractMoveForAgent: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContractMoveForAgent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContractMoveForAgent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createContractMoveForAgent = action.payload;
        message.success("Gửi thành công");
      })
      .addCase(fetchContractMoveForAgent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        message.error("Gửi thất bại ! Vui lòng thử lại");
      });
  },
});

// =========================== //

////1.tạo hợp đồng lắp đặt cho tư  nhân
export const fetchContractInstallForIndividual = createAsyncThunk(
  "createContractInstallForIndividual/fetchContractInstallForIndividual",
  async (body, { rejectWithValue }) => {
    try {
      const response = await contractInstallForIndividual(body);
      debugger;
      return response;
    } catch (error) {
      debugger;
      return rejectWithValue(error);
    }
  }
);

//2.tạo hợp đồng lắp đặt cho cơ qan
export const fetchContractInstallForAgent = createAsyncThunk(
  "createContractInstallForAgent/fetchContractInstallForAgent",
  async (body, { rejectWithValue }) => {
    try {
      const response = await contractInstallForAgent(body);
      debugger;
      return response;
    } catch (error) {
      debugger;
      return rejectWithValue(error);
    }
  }
);

//3.tạo hợp đồng di chuyển nc cho tư nhân
export const fetchContractMoveForIndividual = createAsyncThunk(
  "createContractMoveForIndividual/fetchContractMoveForIndividual",
  async (body, { rejectWithValue }) => {
    try {
      const response = await contractMoveForIndividual(body);
      debugger;
      return response;
    } catch (error) {
      debugger;
      return rejectWithValue(error);
    }
  }
);
//4.tạo hợp đồng di chuyển nc cho cơ quan
export const fetchContractMoveForAgent = createAsyncThunk(
  "createContractMoveForAgent/fetchContractMoveForAgent",
  async (body, { rejectWithValue }) => {
    try {
      const response = await contractMoveForAgent(body);
      debugger;
      return response;
    } catch (error) {
      debugger;
      return rejectWithValue(error);
    }
  }
);

const guestServiceReducer = combineReducers({
  createContractInstallForIndividual: contractInstallForIndividualSlice.reducer,
  createContractInstallForAgent: contractInstallForAgentSlice.reducer,
  createContractMoveForIndividual: contractMoveForIndividualSlice.reducer,
  createContractMoveForAgent: contractMoveForAgentSlice.reducer,
});

export default guestServiceReducer;
