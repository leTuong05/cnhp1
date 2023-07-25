import { Table, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { getListWaterPrice } from '../../services/apis/customerService';
import { WaterPriceStyled } from './styles';

const WaterPrice = () => {
    const columns2 = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width: 70,
            className: 'serial',
            render: (value, record, index) => index + 1
        },
        {
            title: 'MỤC ĐÍCH SỬ DỤNG NƯỚC',
            dataIndex: 'WaterPriceTitle',
            key: 'purpose'
        },
        {
            title: 'GIÁ BÁN (Đ/M3)',
            dataIndex: 'WaterPrice',
            width: 250,
            className: 'price',
            key: 'price'
        }
    ];

    const columns1 = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            className: 'serial',
            width: 70,
            render: (value, record, index) => index + 1
        },
        {
            title: 'mức sử dụng nước sinh hoạt của hộ dân cư (m3/tháng/hộ)',
            dataIndex: 'WaterPriceTitle',
            key: 'purpose'
        },
        {
            title: 'GIÁ BÁN (Đ/M3)',
            dataIndex: 'WaterPrice',
            width: 250,
            key: 'price',
            className: 'price'
        }
    ];

    const [dataWater, setDataWater] = useState([]);
    const purposeUseWater = dataWater?.Object?.Data[0].ListData;
    const usageWater = dataWater?.Object?.Data[1].ListData;

    const data1 = purposeUseWater;
    const data2 = usageWater;
    useEffect(() => {
        const getList = async () => {
            const res = await getListWaterPrice();
            setDataWater(res);
        };
        getList();
    }, []);
    return (
        <WaterPriceStyled>
            <div className="title">Giá nước</div>
            <div className="container-content">
                <div className="water-price-text-red">Giá bán nước sạch của Công ty Cổ phần Cấp nước Hải Phòng giai đoạn 2017 - 2019</div>
                <div className="water-price-text-title">GIÁ BÁN NƯỚC SẠCH CỦA CÔNG TY CỔ PHẦN CẤP NƯỚC HẢI PHÒNG</div>
                <Row className="water-price-policy">
                    <div className="sub-text">(Căn cứ Quyết định số 3208/2016/QĐ-UBND, ngày 21/12/2016 và Quyết định số 758/QĐ-CNHP ngày 26/12/2016)</div>
                    <div className="sub-text">Đơn vị tính: VNĐ/m3</div>
                </Row>
                <div className="water-price-purpose">
                    <div className="purpose-title">1. Giá bán nước sạch theo mục đích sử dụng</div>
                    <Table columns={columns2} dataSource={data2} pagination={false} bordered />
                </div>
                <div className="water-price-purpose">
                    <div className="purpose-title">2. Giá bán nước sạch theo mục đích sử dụng</div>
                    <Table columns={columns1} dataSource={data1} pagination={false} bordered />
                </div>
            </div>
            <div className="sub-text-end"> Mức giá trên chưa bao gồm thuế giá trị gia tăng và phí theo quy định, áp dụng từ ngày 01/01/2017.</div>
        </WaterPriceStyled>
    );
};

export default WaterPrice;
