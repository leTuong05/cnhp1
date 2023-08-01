import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, Logout } from "../services/apis/auth";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  // token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(fetLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetLogin.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.Object;
        state.loading = false;
        state.error = null;
        // state.auth = action.payload;
      })
      .addCase(fetLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

// gui request dang nhap
export const fetLogin = createAsyncThunk(
  "auth/fetLogin",
  async (body, { rejectWithValue }) => {
    try {
      const response = await Login(body);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await Logout();
    return response;
  } catch (error) {
    console.log("Logout failed:", error);
  }
});

export default authSlice.reducer;
