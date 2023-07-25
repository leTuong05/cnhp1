import axiosInstance from "../axios";

export const GetListTicket = (body)=>{
    return axiosInstance.post('TicketList/GetListTicket',body)
}
export const GetTicket = (ticketID)=>{
    return axiosInstance.get(`TicketList/GetInforByID?TicketListID=${ticketID}`)
}