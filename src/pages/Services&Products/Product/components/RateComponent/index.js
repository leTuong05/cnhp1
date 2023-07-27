import React, { useEffect } from 'react'
import { DetailRate, TabsStyled, TotalRate, Wrapper, WrapperHeader } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Rate, Tabs } from 'antd';
import RateItem from '../RateItem';
import { useState } from 'react';


const RateComponent = ({ id, listRate }) => {
    const [rate, setRate] = useState([]);
    const [listRates, setListRates] = useState([]);

    console.log(listRate);
    return (
        <Wrapper>
            <WrapperHeader>
                <TotalRate>
                    <p className='total'>
                        <span className='number-large'>5.0</span>
                        <span>/</span>
                        <span>5</span>
                    </p>
                    <p className='rate-star'>
                        <Rate disabled defaultValue={5} />
                    </p>
                    <p className='rate-text'>55 đánh giá</p>
                </TotalRate>
                <DetailRate>
                    <p>
                        <span className='rate-star'>
                            <Rate disabled defaultValue={5} />
                        </span>
                        <div className='range bg-yellow'>

                        </div>
                        <span className='number-rate'>
                            {/* {listRate[4].Quanity} */}
                        </span>
                    </p>
                    <p>
                        <span className='rate-star'>
                            <Rate disabled defaultValue={4} />
                        </span>
                        <div className='range bg-gray'>

                        </div>
                        <span className='number-rate'>
                            {/* {listRate[3].Quanity} */}
                        </span>
                    </p>
                    <p>
                        <span className='rate-star'>
                            <Rate disabled defaultValue={3} />
                        </span>
                        <div className='range bg-gray'>

                        </div>
                        <span className='number-rate'>
                            {/* {listRate[2].Quanity} */}
                        </span>
                    </p>
                    <p>
                        <span className='rate-star'>
                            <Rate disabled defaultValue={2} />
                        </span>
                        <div className='range bg-gray'>

                        </div>
                        <span className='number-rate'>
                            {/* {listRate[1].Quanity} */}
                        </span>
                    </p>
                    <p>
                        <span className='rate-star'>
                            <Rate disabled defaultValue={1} />
                        </span>
                        <div className='range bg-gray'>

                        </div>
                        <span className='number-rate'>
                            {/* {listRate[0].Quanity} */}
                        </span>
                    </p>
                </DetailRate>
            </WrapperHeader>
            <TabsStyled >

                <Tabs.TabPane tab="Tất cả" key='tab1'>
                    <RateItem>

                    </RateItem>
                </Tabs.TabPane>
                <Tabs.TabPane tab='5 sao' key='tab2'>
                    <div>Hello guy</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab='4 sao' key='tab3'>
                    <div>Hello guy</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab='3 sao' key='tab4'>
                    <div>Hello guy zf</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab='2 sao' key='tab5'>
                    <div>Hello guy zf</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab='1 sao' key='tab6'>
                    <div>Hello guy zf</div>
                </Tabs.TabPane>
            </TabsStyled>
        </Wrapper>
    )
}

export default RateComponent