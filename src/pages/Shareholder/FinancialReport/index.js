import React from "react";
import News from "../../News/components/News";
const listNews = [
    {
        id: 1,
        title: 'Tổng hợp kết quả chất lượng nước thành phẩm từ ngày 29-30/9/2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Báo cáo tài chính riêng giữa niên độ năm 2022',
        image: require('../../../common/images/Rectangle-31.jpg')
    },
    {
        id: 2,
        title: 'Báo cáo tài chính hợp nhất giữa niên độ năm 2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Báo cáo tài chính riêng giữa niên độ năm 2022',
        image: require('../../../common/images/Rectangle-31.jpg')
    },
    {
        id: 3,
        title: 'Báo cáo tài chính riêng Quý II năm 2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Báo cáo tài chính riêng giữa niên độ năm 2022',
        image: require('../../../common/images/Rectangle-31.jpg')
    },
    {
        id: 4,
        title: 'Báo cáo tài chính hợp nhất Quý II năm 2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Tổng hợp kết quả chất lượng nước thành phẩm NMN An Dương, Chi nhánh Cấp nước Hải Phòng 3, 4, 8, Chi nhánh Cấp nước Vĩnh Bảo, Minh Đức, Cát Bà, Ngũ Lão từ ngày 29-30//9/2022',
        image: require('../../../common/images/Rectangle-31.jpg')
    },
    {
        id: 5,
        title: 'Báo cáo tài chính hợp nhất Quý II năm 2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Tổng hợp kết quả chất lượng nước thành phẩm NMN An Dương, Chi nhánh Cấp nước Hải Phòng 3, 4, 8, Chi nhánh Cấp nước Vĩnh Bảo, Minh Đức, Cát Bà, Ngũ Lão từ ngày 29-30//9/2022',
        image: require('../../../common/images/Rectangle-31.jpg')
    },
]
const FinancialReport = () => {
    return <News title={'Báo cáo tài chính'} listNews={listNews}/>;
};

export default FinancialReport;
