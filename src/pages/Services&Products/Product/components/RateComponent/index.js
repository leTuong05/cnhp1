import React from 'react'
import { DetailRate, TabsStyled, TotalRate, Wrapper, WrapperHeader } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Tabs } from 'antd';
import RateItem from '../RateItem';

const items = [
    {
        key: '1',
        label: `Đánh giá sản phẩm`,
        children: `Content of Tab Pane 1`,
        disabled: true,
    },
    {
        key: '2',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`,
    },
    {
        key: '3',
        label: `Tab 2`,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '4',
        label: `Tab 3`,
        children: `Content of Tab Pane 3`,
    },
];
const RateComponent = () => {
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
                        <FontAwesomeIcon className='yellow' icon={faStar} />
                        <FontAwesomeIcon className='yellow' icon={faStar} />
                        <FontAwesomeIcon className='yellow' icon={faStar} />
                        <FontAwesomeIcon className='yellow' icon={faStar} />
                        <FontAwesomeIcon className='yellow' icon={faStar} />
                    </p>
                    <p className='rate-text'>55 đánh giá</p>
                </TotalRate>
                <DetailRate>
                    <p>
                        <span className='rate-star'>
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                        </span>
                        <div className='range bg-yellow'>

                        </div>
                        <span className='number-rate'>
                            5
                        </span>
                    </p>
                    <p>
                        <span className='rate-star'>
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                        </span>
                        <div className='range bg-gray'>

                        </div>
                        <span className='number-rate'>
                            0
                        </span>
                    </p>
                    <p>
                        <span className='rate-star'>
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                        </span>
                        <div className='range bg-gray'>

                        </div>
                        <span className='number-rate'>
                            0
                        </span>
                    </p>
                    <p>
                        <span className='rate-star'>
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                        </span>
                        <div className='range bg-gray'>

                        </div>
                        <span className='number-rate'>
                            0
                        </span>
                    </p>
                    <p>
                        <span className='rate-star'>
                            <FontAwesomeIcon className='yellow' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                            <FontAwesomeIcon className='gray' icon={faStar} />
                        </span>
                        <div className='range bg-gray'>

                        </div>
                        <span className='number-rate'>
                            0
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