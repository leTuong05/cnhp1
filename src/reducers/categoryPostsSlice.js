import { combineReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cancelGetListPost, deleteGetListPost, getAllCategoryPost, getDetailPostByID, insertPostList, postGetList, repostGetListPost, updatePostList } from "../services/apis/postsCategoryy";

//danh muc Categoy
const listCategoryPostSlice = createSlice({
    name: 'listsCategory',
    initialState: {
        listsCategory: {},
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategoryPost.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCategoryPost.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.listsCategory = action.payload;
        })
        .addCase(fetchCategoryPost.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//get Data khi click danh muc
const postGetListSlice = createSlice({
    name: 'postList',
    initialState: {
        postList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPostList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPostList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.postList = action.payload;
        })
        .addCase(fetchPostList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//delete 
const deletePostListSlice = createSlice({
    name: 'deletePostList',
    initialState: {
        deletePostList: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDeletePostList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchDeletePostList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.deletePostList = action.payload;
        })
        .addCase(fetchDeletePostList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//getPostDetailByID
const getDetailPostSlice = createSlice({
    name: 'getPostDetailByID',
    initialState: {
        getPostDetailByID: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGetDetailByID.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchGetDetailByID.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.getPostDetailByID = action.payload;
        })
        .addCase(fetchGetDetailByID.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//insert posts
const addPostsSlice = createSlice({
    name: 'addPostList',
    initialState: {
        addPostList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchInsertPostList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchInsertPostList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.addPostList = action.payload;
        })
        .addCase(fetchInsertPostList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//update
const updatePostsSlice = createSlice({
    name: 'editPostList',
    initialState: {
        editPostList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpdatePostList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchUpdatePostList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.editPostList = action.payload;
        })
        .addCase(fetchUpdatePostList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//cancel
const cancelPostListSlice = createSlice({
    name: 'cancelPostList',
    initialState: {
        cancelPostList: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCancelPostList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCancelPostList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.cancelPostList = action.payload;
        })
        .addCase(fetchCancelPostList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//repost
const rePostListSlice = createSlice({
    name: 'rePostList',
    initialState: {
        rePostList: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRePostList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchRePostList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.rePostList = action.payload;
        })
        .addCase(fetchRePostList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

//get danh muc category
export const fetchCategoryPost = createAsyncThunk("listsCategory/fetchCategoryPost", 
    async () => {
        try {
            const response = await getAllCategoryPost();
            return response;
        } catch (error) {
            console.error(error);
        }
    }
)

//get post list
export const fetchPostList = createAsyncThunk(
    "postList/fetchPostList", async(
        body
    ,{rejectWithValue }) => {
        try {
            const response = await postGetList(body);
            return response;
        } catch (error) {
            return rejectWithValue(error);
    }
})

//delete post list
export const fetchDeletePostList = createAsyncThunk(
    "deletePostList/fetchDeletePostList" , async(id) => {
        try {
            const response = await deleteGetListPost(id)
            return response;
        } catch (error) {
            console.error(error);
        }
    }
)

//add post list
export const fetchInsertPostList = createAsyncThunk(
    "addPostList/fetchInsertPostList", async(
        body
    ,{rejectWithValue }) => {
        try {
            const response = await insertPostList(body);
            return response;
        } catch (error) {
            return rejectWithValue(error);
    }
})

//update
export const fetchUpdatePostList = createAsyncThunk(
    "editPostList/fetchUpdatePostList", async(
        body
    ,{rejectWithValue }) => {
        try {
            const response = await updatePostList(body);
            return response;
        } catch (error) {
            return rejectWithValue(error);
    }
})

//Cancel post list
export const fetchCancelPostList = createAsyncThunk(
    "cancelPostList/fetchCancelPostList" , async(id) => {
        try {
            const response = await cancelGetListPost(id)
            return response;
        } catch (error) {
            console.error(error);
        }
    }
)

//Repost post list
export const fetchRePostList = createAsyncThunk(
    "rePostList/fetchRePostList" , async(id) => {
        try {
            const response = await repostGetListPost(id)
            return response;
        } catch (error) {
            console.error(error);
        }
    }
)


//get Detail by ID
export const fetchGetDetailByID = createAsyncThunk(
    "getPostDetailByID/fetchGetDetailByID" , async(id) => {
        try {
            const response = await getDetailPostByID(id)
            return response;
        } catch (error) {
            console.error(error);
        }
    }
)

const postsCategoryReducer = combineReducers({
    listsCategory: listCategoryPostSlice.reducer,
    postList: postGetListSlice.reducer,
    deletePostList: deletePostListSlice.reducer,
    addPostList: addPostsSlice.reducer,
    cancePostList : cancelPostListSlice.reducer,
    rePostList : rePostListSlice.reducer,
    getPostDetail: getDetailPostSlice.reducer,
    updatePostList : updatePostsSlice.reducer,
})

export default postsCategoryReducer;