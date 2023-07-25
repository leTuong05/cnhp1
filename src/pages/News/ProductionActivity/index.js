import React from "react";
import { Col, Pagination, Row, Typography } from 'antd';

import anh1 from './../../../common/images/Rectangle-31.jpg'
import { Link } from "react-router-dom";
import NewItem from "../components/NewItem";
import PostCategory from "../components/PostCategory";
import News from "../components/News";



const listNews = [
    {
        id: 1,
        title: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        datetime: '11/10/2022 14:52:59',
        summary: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        image: anh1
    },
    {
        id: 2,
        title: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        datetime: '11/10/2022 14:52:59',
        summary: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        image: anh1
    },
    {
        id: 3,
        title: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        datetime: '11/10/2022 14:52:59',
        summary: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        image: anh1
    }
]




const ProductionActivity = () => {
    return (
        <News
            title={'Hoạt động sản xuất kinh doanh'}
            listNews={listNews}
        
            
        />
    )

};

export default ProductionActivity;
