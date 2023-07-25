import { Tabs } from 'antd';
import { TabStyled } from './styles';

function CustomTabs({ items, title, operations }) {
    return (
        <TabStyled>
            <div className="title">{title}</div>
            <div>
                <Tabs defaultActiveKey="1" items={items} tabBarExtraContent={operations} />
            </div>
        </TabStyled>
    );
}

export default CustomTabs;
