import { combineReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewTags, deleteTags, getAllCategoryTags, getListsTag, updateTags } from "../services/apis/tagsCategory";
import { message } from "antd";

const initialState = {
    tags: {},
    isLoading: 'idle',
    error: null
}

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder
        //fetchOverView
        .addCase(fetchTags.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTags.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tags = action.payload;
        })
        .addCase(fetchTags.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})


//get list
const tagsListSlice = createSlice({
    name: 'tagsList',
    initialState: {
        tagsList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        //fetchOverView
        .addCase(fetTagsList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetTagsList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tagsList = action.payload;
        })
        .addCase(fetTagsList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//delete
const deteleTagsSlice = createAsyncThunk({
    name: 'deleteTagsList',
    initialState: {
        deleteTagsList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        //fetchOverView
        .addCase(fetDeleteTagsList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetDeleteTagsList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.deleteTagsList = state.deleteTagsList.filter((tag) =>  tag.TagsID !== action.payload.TagsID);
        })
        .addCase(fetDeleteTagsList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//update TagList
const updateTagSlice = createSlice({
    name: 'updateTagsList',
    initialState: {
        updateTagsList: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        //fetchOverView
        .addCase(fetUpdateTagsList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetUpdateTagsList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.updateTagsList = action.payload;
            message.error("Cập nhật thẻ thành công!");
        })
        .addCase(fetUpdateTagsList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            message.error("Cập nhật thẻ thất bại!");
        });
    }
})

//add tags list
const addTagSlice = createSlice({
    name: 'addTagsList',
    initialState: {
        addTagsList: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        //fetchOverView
        .addCase(fetAddTags.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetAddTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.addTagsList = action.payload;
            message.success('Thêm thẻ thành công!');
        })
        .addCase(fetAddTags.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            // message.error('Thêm thẻ thất bại!');
        });
    }
})

//get danh sach name cac the
export const fetchTags = createAsyncThunk("tags/fetchTags", 
    async () => {
        try {
            const response = await getAllCategoryTags();
            return response;
        } catch (error) {
            console.error(error);
        }
    }
)

//get list tags detail
export const fetTagsList = createAsyncThunk(
    "tagsList/fetTagsList", async(
        body
    ,{rejectWithValue }) => {
        try {
            const response = await getListsTag(body);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
})

//delete tags
export const fetDeleteTagsList = createAsyncThunk(
    "deleteTagsList/fetDeleteTagsList", async(
        tagsId
    ,{rejectWithValue }) => {
        try {
            const response = await deleteTags(tagsId);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
})

//update tags
export const fetUpdateTagsList = createAsyncThunk(
    "updateTagsList/fetUpdateTagsList",
    async (requestBody) => {
      const response = await updateTags(requestBody);
      return response;
})

//add tags
export const fetAddTags = createAsyncThunk(
    "addTagsList/fetAddTags",
    async (requestBody) => {
      const response = await addNewTags(requestBody);
      return response;
})


export const selectTags = state => state.tags.tags.tags.Object
// export const selectTagsLists = state => state

const tagsReducer = combineReducers({
    tags: tagsSlice.reducer,
    tagsList: tagsListSlice.reducer,
    deleteTags: deteleTagsSlice.reducer,
    updateTagsList: updateTagSlice.reducer,
    addTags: addTagSlice.reducer,
});

export default tagsReducer;