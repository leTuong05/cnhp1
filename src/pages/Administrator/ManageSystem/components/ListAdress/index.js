import React, { useEffect, useState } from 'react'
import { Tree } from 'antd';
import { GetListLocation } from '../../../../../services/apis/GetListLocation';
import { StyledTree, Wrapper } from './styles';

const { TreeNode } = Tree;
function buildTree(data) {
    const nodes = {};
    const rootNodes = [];

    // Duyệt qua từng node trong `treeData`
    for (const node of data) {
        const { RegionID, ParentID, RegionName, RegionLevel, Order } = node;

        // Tạo một node mới
        const newNode = {
            key: RegionID,
            title: RegionName,
            RegionLevel,
            Order,
            children: [],
        };

        // Đưa node mới vào trong đối tượng `nodes`
        nodes[RegionID] = newNode;

        // Nếu node là node gốc, đưa nó vào mảng `rootNodes`
        if (!ParentID) {
            rootNodes.push(newNode);
        } else {
            // Nếu không phải node gốc, tìm node cha của nó trong đối tượng `nodes`
            const parentNode = nodes[ParentID];

            // Nếu node cha không tồn tại, bỏ qua node hiện tại
            if (!parentNode) {
                continue;
            }

            // Đưa node hiện tại vào mảng `children` của node cha
            parentNode.children.push(newNode);
        }
    }

    return rootNodes;
}

function renderTreeNodes(nodes) {
    return nodes.map(node => {
        if (node.children && node.children.length > 0) {
            return (
                <TreeNode key={node.key} title={node.title}>
                    {renderTreeNodes(node.children)}
                </TreeNode>
            );
        } else {
            return <TreeNode key={node.key} title={node.title} />;
        }
    });
}

function ListAdress({ onSelectRegion }) {
    const [treeData, setTreeData] = useState([{
        "RegionID": 4050,
        "ParentID": null,
        "RegionName": "Hải Phòng",
        "RegionLevel": 3,
        "Order": 6
    }])
    let treeDataWithChildren;
    useEffect(() => {

        const getListLocation = async () => {
            const response = await GetListLocation(4050);
            setTreeData((prev) => [...prev, ...response.Object])
        }
        getListLocation();

    }, [])
    //data

    treeDataWithChildren = buildTree(treeData);

    const handleSelect = (selectedKeys) => {
        if (selectedKeys.length > 0) {
            const selectedNodeId = selectedKeys[0]; // Lấy RegionID của node đã được chọn (chỉ lấy phần tử đầu tiên nếu có nhiều node được chọn)
            // console.log("Selected RegionID:", selectedNodeId);
            // Thực hiện các thao tác khác dựa trên RegionID này

            onSelectRegion(selectedNodeId);
        }
    };
    return (
        <Wrapper>
            <StyledTree
                onSelect={handleSelect}
                defaultExpandAll>
                {renderTreeNodes(treeDataWithChildren)}
            </StyledTree>
        </Wrapper>
    );
}



export default ListAdress