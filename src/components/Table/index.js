import { Table } from 'antd';
import { TableStyled } from './styles';

function CustomTable({ columns, dataSource, rowSelection, onMouseEnter, onMouseLeave, onRow, bordered, rowKey }) {
    const props = {
        rowKey,
        columns,
        dataSource,
        rowSelection,
        onMouseEnter,
        onMouseLeave,
        onRow,
        bordered
    };
    return <TableStyled {...props} />;
}

export default CustomTable;
