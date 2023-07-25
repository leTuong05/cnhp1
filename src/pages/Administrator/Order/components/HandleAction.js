import moment from "moment";
import { GetAllOrderForAdmin, UpdateOrder } from "../../../../services/apis/Order";

export const handleCompleteOrder = async (record, setListOrders) => {
    try {
        // Xử lý xác nhận đơn hàng trên server ở đây
        await UpdateOrder({
            OrderID: record.OrderID,
            StatusOrder: 3,
            CreateDate: moment().format("YYYY-MM-DDTHH:mm:ssZ"),
            ReasonCancel: "",

        }
        );
        // Sau khi xử lý thành công, cập nhật lại trạng thái của đơn hàng trong listOrders
        setListOrders(prevListOrders => {
            const updatedOrders = prevListOrders.map(order => {
                if (order.OrderID === record.OrderID) {
                    // Cập nhật lại trạng thái của đơn hàng sau khi xác nhận
                    return {
                        ...order,
                        StatusOrder: 3/* trạng thái mới sau khi xác nhận, có thể là 2 hoặc giá trị tương ứng */
                    };
                }
                return order;
            });
            return updatedOrders;
        });
    } catch (error) {
        console.error('Error confirming order:', error);
    }
};
export const handleConfirmOrder = async (record, setListOrders) => {
    try {
        // Gọi API UpdateOrder với thông tin cần thiết
        await UpdateOrder(
            {
                OrderID: record.OrderID,
                StatusOrder: 2,
                CreateDate: moment().format("YYYY-MM-DDTHH:mm:ssZ"),
                ReasonCancel: "",
            }

        );
        setListOrders(prevListOrders => {
            const updatedOrders = prevListOrders.map(order => {
                if (order.OrderID === record.OrderID) {
                    // Cập nhật lại trạng thái của đơn hàng sau khi xác nhận
                    return {
                        ...order,
                        StatusOrder: 2,/* trạng thái mới sau khi xác nhận, có thể là 2 hoặc giá trị tương ứng */
                        isAccept: false,
                        isDelete: false,
                        isComplete: true
                    };
                }
                return order;
            });
            return updatedOrders;
        });
    } catch (error) {
        console.error('Error confirming order:', error);
    }
};
// export const handleCompleteOrder = async (record) => {
//     try {
//         // Gọi API UpdateOrder với thông tin cần thiết
//         const response = await UpdateOrder({
//             OrderID: record.OrderID,
//             StatusOrder: 3,
//             CreateDate: moment().format("YYYY-MM-DDTHH:mm:ssZ"),
//             ReasonCancel: "",

//         }

//         );
//         console.log('Order confirmed:', response);

//     } catch (error) {
//         console.error('Error confirming order:', error);
//     }
// };
export const handleDeleteOrder = async (orderID, reasonCancel, setListOrders) => {
    try {
        // Gọi API UpdateOrder với thông tin cần thiết
        await UpdateOrder(
            {
                OrderID: orderID,
                StatusOrder: 4,
                CreateDate: moment().format("YYYY-MM-DDTHH:mm:ssZ"),
                ReasonCancel: reasonCancel,
            }

        );
        setListOrders(prevListOrders => {
            const updatedOrders = prevListOrders.map(order => {
                if (order.OrderID === orderID) {
                    // Cập nhật lại trạng thái của đơn hàng sau khi xác nhận
                    return {
                        ...order,
                        StatusOrder: 4,/* trạng thái mới sau khi xác nhận, có thể là 2 hoặc giá trị tương ứng */
                        isAccept: false,
                        isDelete: false,
                        isComplete: false
                    };
                }
                return order;
            });
            return updatedOrders;
        });

    } catch (error) {
        console.error('Error confirming order:', error);
    }
};