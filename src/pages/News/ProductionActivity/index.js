import React, { useEffect, useState } from "react";
import { Col, Pagination, Row, Typography } from 'antd';

import anh1 from './../../../common/images/Rectangle-31.jpg'
import { Link, useLocation, useParams } from "react-router-dom";
import NewItem from "../components/NewItem";
import PostCategory from "../components/PostCategory";
import News from "../components/News";
import { GetAllPost } from "../../../services/apis/Post";



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
    const [listNews, setListNews] = useState([])
    const { postCategory } = useParams();
    const CategoryPostID = postCategory.split("=")[1]
    const location = useLocation();
    const { categoryPostName } = location.state || {};
    useEffect(() => {
        const getPost = async () => {
            const res = await GetAllPost({
                PageSize: 20,
                CurrentPage: 1,
                TextSearch: "",
                CategoryPostID: CategoryPostID
            })

            setListNews(res.Object)
        }
        getPost()
    }, [CategoryPostID])
    return (
        <News
            title={categoryPostName}
            listNews={listNews}


        />
    )

};

export default ProductionActivity;
