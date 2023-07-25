import { Table, Tree } from 'antd';
import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

function ListDepartment({ treeData, onSelect }) {
    const dispatch = useDispatch();

    // const [dataListParentView, setdataListparentView] = useState([]);

    // const listViewParent = useSelector((state) => state?.department?.departmentParent?.departmentParentGet?.Object);

    // useEffect(() => {
    //     setdataListparentView(listViewParent);
    // }, [listViewParent]);
    // useEffect(() => {
    //     getparentList();
    // }, []);

    return (
        <>
            <Tree
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onSelect={onSelect}
                treeData={treeData}
                style={{
                    borderRadius: 10,
                    border: '1px solid var(--border, #DDD)',
                    background: 'var(--white, #FFF)'
                }}
            />
        </>
    );
}

export default ListDepartment;
