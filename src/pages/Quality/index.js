import React from "react";
import News from "../News/components/News";


const listNews = [
    {
        id: 1,
        title: 'Tổng hợp kết quả chất lượng nước thành phẩm từ ngày 29-30/9/2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Tổng hợp kết quả chất lượng nước thành phẩm NMN An Dương, Chi nhánh Cấp nước Hải Phòng 3, 4, 8, Chi nhánh Cấp nước Vĩnh Bảo, Minh Đức, Cát Bà, Ngũ Lão từ ngày 29-30//9/2022',
        image: require('../../common/images/image-quantity.png')
    },
    {
        id: 2,
        title: 'Tổng hợp kết quả chất lượng nước thành phẩm từ ngày 29-30/9/2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Tổng hợp kết quả chất lượng nước thành phẩm NMN An Dương, Chi nhánh Cấp nước Hải Phòng 3, 4, 8, Chi nhánh Cấp nước Vĩnh Bảo, Minh Đức, Cát Bà, Ngũ Lão từ ngày 29-30//9/2022',
        image: require('../../common/images/image-quantity.png')
    },
    {
        id: 3,
        title: 'Tổng hợp kết quả chất lượng nước thành phẩm từ ngày 29-30/9/2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Tổng hợp kết quả chất lượng nước thành phẩm NMN An Dương, Chi nhánh Cấp nước Hải Phòng 3, 4, 8, Chi nhánh Cấp nước Vĩnh Bảo, Minh Đức, Cát Bà, Ngũ Lão từ ngày 29-30//9/2022',
        image: require('../../common/images/image-quantity.png')
    }
]



const Quality = () => {

    

    return( <News
        title={'Kiểm tra chất lượng nước'}
        listNews={listNews}
        
        
    />);
};

export default Quality;
