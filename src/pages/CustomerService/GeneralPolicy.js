import React from 'react';
import { Collapse } from 'antd';
import { PolicyGeneralStyled } from './styles';
const items = [
    {
        key: '1',
        label: '1. Chính sách thanh toán',
        children: (
            <p>
                Website không có chức năng bán hàng. Quý khách có nhu cầu mua hàng với số lượng lớn để kinh doanh hoặc buôn sỉ vui lòng liên hệ trực tiếp với chúng tôi để có chính sách giá cả hợp lý. Và việc thanh toán sẽ được thực hiện theo hợp đồng.
                <br />
                <br />
                Chúng tôi cam kết kinh doanh minh bạch, hợp pháp, bán hàng chất lượng, có nguồn gốc rõ ràng.
            </p>
        )
    },
    {
        key: '2',
        label: '2. Chính sách vận chuyển',
        children: <p>Website không có chức năng bán hàng chỉ giới thiệu về sản phẩm công ty. Chính sách vận chuyển sẽ được công ty áp dụng theo từng trường hợp đối với khách hàng</p>
    },
    {
        key: '3',
        label: '3. Chính sách đổi trả - bảo hành',
        children: (
            <p>
                Tiếp nhận mọi khiếu nại của khách hàng liên quan đến việc sử dụng dịch vụ của công ty.
                <br />
                <br />
                Tất cả mọi trường hơp bảo hành, quý khách có thể liên hệ với chúng tôi để làm thủ tục bảo hành.
                <br />
                <br />
                Thời gian giải quyết khiếu nại trong thời hạn tối đa là 03 (ba) ngày làm việc kể từ khi nhận được khiếu nại của của khách hàng. Trong trường hợp bất khả kháng 2 bên sẽ tự thương lượng.
            </p>
        )
    },
    {
        key: '4',
        label: '4. Hướng dẫn mua hàng',
        children: <p>Gọi điện thoại đến số hotline nhân viên của công ty sẽ tư vấn và hỗ trợ cho khác hàng tất cả các thông tin về sản phẩm và dịch vụ...</p>
    }
];
const GeneralPolicy = () => {
    return (
        <PolicyGeneralStyled>
            <div className="title">Chính sách chung</div>
            <Collapse items={items} ghost expandIconPosition="end" defaultActiveKey={['1']} />
        </PolicyGeneralStyled>
    );
};

export default GeneralPolicy;
