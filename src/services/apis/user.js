import axiosInstance from '../axios';

export const getListStaff = () => axiosInstance.get('User/GetListStaff');

export const getListPhonebookAgent = (body) => {
    return axiosInstance.post('User/GetAgent', body)
}
export const getListPhonebookGuest = (body) => {
    return axiosInstance.post('User/GetGuest', body)
}

export const InsertGuest = (body) => {
    return axiosInstance.post('User/InsertGuest', body)
}
export const InserAgent = (body) => {
    return axiosInstance.post('User/InsertAgent', body)
}

export const DeleteGuest = (UserID) => {
    return axiosInstance.patch(`User/DeleteGuest?UserID=${UserID}`)
}

export const UpdateGuest = (body) => {
    return axiosInstance.put('User/UpdateGuest', body)
}

export const GetAgent = (body) =>{
    return axiosInstance.post('User/GetAgent',body)
}

export const DeleteAgent = (UserID) =>{
    return axiosInstance.patch(`User/DeleteAgent?UserID=${UserID}`)
}

export const UpdateAgent = (body) => {
    return axiosInstance.put('User/UpdateAgent', body)
}