import React, { useState } from 'react'
import { Wrapper, WrapperButton, WrapperSearch } from './styles'
import { Button, Col, Input, Row, Select } from 'antd'
import TitleComponent from '../../../components/TitleComponent';
import ListAdress from './components/ListAddress';
import ListPhonebook from './components/ListPhonebook';
import { useDispatch, useSelector } from 'react-redux';
import { changeCondition, setListBusiness, setLoading } from '../../../reducers/agentDirectory';
import ModalInsertUpdateBusiness from './components/ModalInsertUpdateBusiness';
import { GetAgent } from '../../../services/apis/user';

const { Search } = Input;
const PhonebookBusiness = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const { condition } = useSelector(state => state.agent)
    console.log('condition: ', condition);

    const getPhonebook = () => {
        dispatch(setLoading())
        GetAgent(condition)
            .then(res => {
                dispatch(setListBusiness(res.Object))
            })
            .finally(() => dispatch(setLoading(false)))
    }
    return (
        <Wrapper>
            <WrapperSearch>
                <Row gutter={20} style={{ marginTop: '20px' }}>
                    <Col span={16}>
                        <Search
                            placeholder="Nhập tên, mã, SĐT khách hàng"
                            // onSearch={handleSearch}
                            onSearch={value => {
                                dispatch(
                                    changeCondition({
                                        ...condition,
                                        TextSearch: value,
                                    }),
                                )
                            }}
                            style={{
                                width: '100%',
                            }}
                        />
                    </Col>
                    <Col span={8}>
                        <Select
                            defaultValue="Tất cả"
                            style={{
                                width: '100%',
                            }}
                            // onChange={handleSelectType}
                            onChange={value => {
                                dispatch(
                                    changeCondition({
                                        ...condition,
                                        GuestType: value,
                                    }),
                                )
                            }}
                            options={[

                                {
                                    value: 0,
                                    label: 'Tất cả',
                                },
                                {
                                    value: 3,
                                    label: 'Tư nhân',
                                },
                                {
                                    value: 1,
                                    label: 'Cơ quan',
                                },
                                {
                                    value: 2,
                                    label: 'Đại lý cấp 1',
                                },
                                {
                                    value: 4,
                                    label: 'Đại lý cấp 2',
                                },

                            ]}
                        />
                    </Col>
                </Row>
            </WrapperSearch>
            <TitleComponent title={'Danh bạ doanh nghiệp'}>
                <WrapperButton>
                    <Button
                        className='btn-add'
                        onClick={() => {
                            setIsOpen(true)
                        }}
                    >
                        Thêm doanh nghiệp
                    </Button>
                </WrapperButton>
            </TitleComponent>
            <Row gutter={20}>
                <Col span={5}>
                    <ListAdress />
                </Col>
                <Col span={19}>
                    <ListPhonebook
                    />
                </Col>
            </Row>
            {isOpen && (
                <ModalInsertUpdateBusiness
                    isOpen={isOpen}
                    onCancel={() => {
                        setIsOpen(false)
                    }}
                    onOk={()=>{
                        setIsOpen(false)
                        getPhonebook()
                        
                    }}
                />
            )}
            

        </Wrapper>
    )
}

export default PhonebookBusiness