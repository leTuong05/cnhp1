import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createManagementTeam,
  deleteManagementTeam,
  getAll,
  getListManagementTeam,
  getListRegionHP,
  getListStaff,
  getRegion,
  getRegionAll,
  getRegionByRegionID,
  updateManagementTeam,
} from "../services/apis/managementTeam";
import { message } from "antd";

const initialState = {
  overViewGet: null,
  status: "idle",
  error: null,
};

//list bo loc
const listManagementSlice = createSlice({
  name: "listAllStatus",
  initialState,
  extraReducers: (builder) => {
    builder
      //fetchOverView
      .addCase(fetchgetList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchgetList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listAllStatus = action.payload;
      })
      .addCase(fetchgetList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//list
const listAllManagementSlice = createSlice({
  name: "listAllManage",
  initialState: {
    postList: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchgetListAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchgetListAll.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.listAllManage = action.payload;
      })
      .addCase(fetchgetListAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//update
const updateManageTeamSlice = createSlice({
  name: "updateManageTeam",
  initialState: {
    postList: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdateManageTeam.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUpdateManageTeam.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.updateManageTeam = action.payload;
        message.success("Sửa thành công")
      })
      .addCase(fetchUpdateManageTeam.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//delete
const deleteManageTeamSlice = createSlice({
  name: "deleteManageTeam",
  initialState: {
    deleteManageTeam: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeteleManageTeam.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDeteleManageTeam.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deleteManageTeam = action.payload;
      })
      .addCase(fetchDeteleManageTeam.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//create
const createManageTeamSlice = createSlice({
  name: "createManageTeam",
  initialState: {
    postList: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateManageTeam.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCreateManageTeam.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createManageTeam = action.payload;
        message.success("Thêm thành công");
      })
      .addCase(fetchCreateManageTeam.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        message.error("Thêm thất bại ! Vui lòng thử lại");
      });
  },
});

//region All
const regionAllSlice = createSlice({
  name: "regionAll",
  initialState: {
    regionAll: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetRegionAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetRegionAll.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.regionAll = action.payload;
      })
      .addCase(fetchGetRegionAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//get region quan/huyen
const regionSlice = createSlice({
  name: "region",
  initialState: {
    region: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetRegion.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetRegion.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.region = action.payload;
      })
      .addCase(fetchGetRegion.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//region phuong/xa
const regionByIDSlice = createSlice({
  name: "regionByRegionID",
  initialState: {
    regionByRegionID: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetRegionByRegionID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetRegionByRegionID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.regionByRegionID = action.payload;
      })
      .addCase(fetchGetRegionByRegionID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//staff all
const staffAllSlice = createSlice({
  name: "staffAll",
  initialState: {
    staffAll: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetGetListStaff.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetGetListStaff.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.staffAll = action.payload;
      })
      .addCase(fetGetListStaff.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//REGION HP
const regionHPSlice = createSlice({
  name: "regionHP",
  initialState: {
    regionHP: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetGetListRegionHP.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetGetListRegionHP.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.regionHP = action.payload;
      })
      .addCase(fetGetListRegionHP.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//get d/s to quan ly
export const fetchgetList = createAsyncThunk(
  "listAllStatus/fetchgetList",
  async (body, { rejectWithValue }) => {
    try {
      const response = await getListManagementTeam(body);
      // debugger;
      return response;
    } catch (error) {
      // debugger;
      return rejectWithValue(error);
    }
  }
);

//get All list
export const fetchgetListAll = createAsyncThunk(
  "listAllManage/fetchgetListAll",
  async (rejectWithValue) => {
    try {
      const response = await getAll();
      // debugger;
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//update Manage Team
export const fetchUpdateManageTeam = createAsyncThunk(
  "updateManageTeam/fetchUpdateManageTeam",
  async (body, { rejectWithValue }) => {
    try {
      const response = await updateManagementTeam(body);
      debugger;
      return response;
    } catch (error) {
      debugger;
      return rejectWithValue(error);
    }
  }
);

//delete
export const fetchDeteleManageTeam = createAsyncThunk(
  "deleteManageTeam/fetchDeteleManageTeam",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteManagementTeam(id);
      // debugger;
      return response;
    } catch (error) {
      // debugger;
      return rejectWithValue(error);
    }
  }
);

//create Manage Team
export const fetchCreateManageTeam = createAsyncThunk(
  "createManageTeam/fetchCreateManageTeam",
  async (body, { rejectWithValue }) => {
    try {
      const response = await createManagementTeam(body);
      debugger;
      return response;
    } catch (error) {
      debugger;
      return rejectWithValue(error);
    }
  }
);

//region by Region ID quan/huyen
export const fetchGetRegion = createAsyncThunk(
  "region/fetchGetRegion",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getRegion(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//region phuong/xa
export const fetchGetRegionByRegionID = createAsyncThunk(
  "regionByRegionID/fetchGetRegionByRegionID",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getRegionByRegionID(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//region All
export const fetchGetRegionAll = createAsyncThunk(
  "regionAll/fetchGetRegionAll",
  async (rejectWithValue) => {
    try {
      const response = await getRegionAll();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//list all Staff
export const fetGetListStaff = createAsyncThunk(
  "staffAll/fetGetListStaff",
  async (rejectWithValue) => {
    try {
      const response = await getListStaff();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//getListRegionHP
export const fetGetListRegionHP = createAsyncThunk(
  "regionHP/fetGetListRegionHP",
  async (rejectWithValue) => {
    try {
      const response = await getListRegionHP();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const managementTeamReducer = combineReducers({
  listMagagementTeam: listManagementSlice.reducer,
  listAll: listAllManagementSlice.reducer,
  updateManageTeam: updateManageTeamSlice.reducer,
  deleteManageTeam: deleteManageTeamSlice.reducer,
  createManageTeam: createManageTeamSlice.reducer,
  regionAll: regionAllSlice.reducer,
  region: regionSlice.reducer,
  regionByRegionID: regionByIDSlice.reducer,
  listStaff: staffAllSlice.reducer,
  regionListHP: regionHPSlice.reducer,
});

export default managementTeamReducer;
