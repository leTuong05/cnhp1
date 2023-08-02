import React, { useEffect, useState } from 'react'
import { Wrapper, WrapperButton, WrapperSearch } from './styles'
import { Button, Col, Input, Modal, Row, Select } from 'antd';
import TitleComponent from '../../../../components/TitleComponent';
import ListAdress from '../components/ListAdress';
import ListPhonebook from '../components/ListPhonebook';
import ModalInsertGuest from '../components/ModalInsertGuest';
import { getListPhonebookGuest } from '../../../../services/apis/user';
import { values } from 'lodash';
const { Search } = Input;
const PhonebookGuest = () => {
    const [showModalInsert, setShowModalInsert] = useState(false)
    const [listPhonebookGuest, setListPhoneBookGuest] = useState([]);
    const [textSearch, setTextSearch] = useState("")
    const [guestType, setGuestType] = useState()
    const [provinceID, setProvinceID] = useState()
    const [districtID, setDistrictID] = useState()
    const [wardID, setWardID] = useState()
    const [showModalImport, setShowModalImport] = useState(false)

    const [load, setLoad] = useState(false)
    const handleInsertGuestToList = (isLoad) => {
        setLoad(isLoad)
    };

    const handleUpdateGuest = (isLoad) => {
        setLoad(isLoad)
    }

    const handleSearch = (value) => {
        setTextSearch(value)
    }

    const handleSelectType = (value) => {
        setGuestType(value)
    }

    const handleImport = () => {
        setShowModalImport(true)
    }

    const handleCancelImport = () => {
        setShowModalImport(false)
    }

    const handleProvinceID = (id) => {
        setProvinceID(id)
        setDistrictID(0)
    }
    const handleDistrictID = (id) => {
        setDistrictID(id)
        setProvinceID(0)
    }
    const handleWardID = (id) => {
        setWardID(id)
    }
    useEffect(() => {
        const getPhonebook = async () => {
            const response = await getListPhonebookGuest({
                PageSize: 50,
                CurrentPage: 1,
                TextSearch: textSearch || "",
                ProvinceID: provinceID || 0,
                DistrictID: districtID || 0,
                WardID: 0,
                GuestType: guestType || 0
            })
            setListPhoneBookGuest(response.Object)
            setLoad(false)
        }
        getPhonebook()
    }, [load, textSearch, guestType, provinceID, districtID])
    const handleHide = () => {
        setShowModalInsert(false)
    }
    const handleOpen = () => {
        setShowModalInsert(true)
    }

    return (
        <Wrapper>
            <WrapperSearch>
                <Row gutter={20} style={{ marginTop: '20px' }}>
                    <Col span={16}>
                        <Search
                            placeholder="Nhập tên, mã, SĐT khách hàng"
                            onSearch={handleSearch}
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
                            onChange={handleSelectType}
                            options={[

                                {
                                    value: -1,
                                    label: 'Tất cả',
                                },
                                {
                                    value: 0,
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
                                    value: 3,
                                    label: 'Đại lý cấp 2',
                                },

                            ]}
                        />
                    </Col>
                </Row>
            </WrapperSearch>
            <TitleComponent title={'Danh bạ khách hàng'}>
                <WrapperButton>
                    <Button onClick={handleImport}>
                        Nhập file khách hàng
                    </Button>
                    <Button>
                        Xuất file
                    </Button>
                    <Button className='btn-add' onClick={handleOpen}>
                        Thêm khách hàng
                    </Button>
                </WrapperButton>
            </TitleComponent>
            <Row gutter={20}>
                <Col span={5}>
                    <ListAdress handleProvinceID={handleProvinceID} handleDistrictID={handleDistrictID} handleWardID={handleWardID} />
                </Col>
                <Col span={19}>
                    <ListPhonebook listPhonebookGuest={listPhonebookGuest} onUpdateGuest={handleUpdateGuest} onDelete={handleInsertGuestToList} />
                </Col>
            </Row>
            {showModalInsert && (
                <ModalInsertGuest isModalOpen={showModalInsert} onCancel={handleHide} onInsertGuest={handleInsertGuestToList} />
            )}
            {showModalImport && (
                <Modal open={showModalImport} onCancel={handleCancelImport}>
                    <p>Khu vực: </p>

                </Modal>
            )}

        </Wrapper>
    )
}

export default PhonebookGuest