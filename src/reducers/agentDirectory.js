import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listAddress: [],
    listBusiness: [],
    loading: false,
    addressSelect:{},
    condition:{
        CurrentPage:1,
        PageSize: 20,
        TextSearch:"",
        GuestType:undefined
    }
}

export const agentDirectorySlice = createSlice({
    name: 'agentDirectory',
    initialState,
    reducers:{
        setLoading: (state,action) =>{
            state.loading = action.payload
        },
        setListAddress: (state,action) =>{
            state.listAddress = action.payload
        },
        setListBusiness: (state,action) =>{
            state.listBusiness = action.payload
        },
        setAddressSelect: (state,action) =>{
            state.addressSelect = action.payload
        },
        changeCondition: (state,action) =>{
            state.condition = action.payload
        },
    }
})

export const {
    setLoading,
    setListAddress,
    setAddressSelect,
    setListBusiness,
    changeCondition
} = agentDirectorySlice.actions

export default agentDirectorySlice.reducer