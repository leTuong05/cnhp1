import { Tree } from 'antd';
import React from 'react';

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0'
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1'
                    }
                ]
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: (
                            <span
                                style={{
                                    color: '#1677ff'
                                }}
                            >
                                sss
                            </span>
                        ),
                        key: '0-0-1-0'
                    }
                ]
            }
        ]
    }
];

function ListDepartment() {
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
    return (
        <div>
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
        </div>
    );
}

export default ListDepartment;
