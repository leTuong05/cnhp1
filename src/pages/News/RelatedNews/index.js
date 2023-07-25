import React from 'react'
import News from '../components/News'

import anh1 from './../../../common/images/Rectangle-31.jpg'

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



const RelatedNews = () => {
    return (
        <News
            title={'Tin tức liên quan'}
            listNews={listNews}
            
            
        />
    )
}

export default RelatedNews