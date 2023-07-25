import React, { useEffect, useState } from 'react'
import { Wrapper } from './styles'
import { StyledTree } from './styles'
import { Button, Tree } from 'antd';
import ActionSidebar from '../ActionSidebar';
import { GetListLocation } from '../../../../../services/apis/GetListLocation';

const { TreeNode } = Tree;


function buildTree(data, id = null, link = 'ParentID') {
    return data.filter(item => item[link] === id).map(item => ({
            ...item,
            children: buildTree(data, item.RegionID, link),
        }));
}

// const buildTree = (data, parentId = null) => {
//     const children = data.filter(node => node.ParentID === parentId);
//     return children.map(node => (
//         <TreeNode key={node.RegionID} title={node.RegionName}>
//             {buildTree(data, node.RegionID)}
//         </TreeNode>
//     ));
// };

const ListAddress = () => {
    const treeData = [
        {
            RegionID: 4162,
            ParentID: 4050,
            RegionName: 'Huyện An Dương',
            RegionLevel: 3,
            Order: 6
        },
        {
            RegionID: 4177,
            ParentID: 4162,
            RegionName: 'Xã An Đồng',
            RegionLevel: 4,
            Order: 7
        },
        {
            RegionID: 11616,
            ParentID: 4177,
            RegionName: 'thôn 1',
            RegionLevel: 5,
            Order: 0
        },

    ];
    const treeDataWithChildren = buildTree(treeData);
    console.log(treeDataWithChildren);
    // const [treeData, setTreeData] =useState([]);
    const handleSelect = (selectedKeys, info) => {
        console.log('Selected Keys:', selectedKeys.node.pos);
        console.log('Info:', info.node.pos);
        // Add your custom logic here based on the selectedKeys or info
    };
    const [hoveredLevel, setHoveredLevel] = useState();
    const [showButton, setShowButton] = useState(false);

    const handleMouseEnter = (selectedKeys, info) => {
        const str = selectedKeys.node.pos;
        const level = str.split("-").length;
        // console.log("cái này level: ", level - 1);
        // console.log(selectedKeys);
        setHoveredLevel(level - 1)
    };

    const handleMouseLeave = () => {
        setHoveredLevel('');
        // console.log('Hovered Level: None');
    };

    const titleRender = (nodeProps) => {
        console.log(nodeProps);
        const { title, pos, key, isLeaf } = nodeProps;
        const { RegionLevel, RegionName } = nodeProps;
        if (hoveredLevel === 3 && RegionLevel === 3) {
            return (
                <div className="ant-tree-title">
                    <div>{nodeProps.RegionName}</div>
                    <ActionSidebar className='hover' lessAction />
                </div>
            );
        }
        else if (hoveredLevel === 4 && RegionLevel === 4) {
            return (
                <div className="ant-tree-title">
                    <div>{nodeProps.RegionName}</div>
                    <ActionSidebar className='hover' fullAction />
                </div>
            );
        } else {
            return (
                <div className="ant-tree-title">
                    <div>{nodeProps.RegionName}</div>

                </div>
            );
        }
        return title;
    }

    // useEffect(() => {
    //     const getListLocation = async () => {
    //         const response = await GetListLocation({
    //             RegionId: 4050
    //         });

    //         console.log(response.Object);
    //     }
    //     getListLocation();
    // }, [])
    // const tree = buildTree(treeData, null);
    return (
        <Wrapper>
            <StyledTree
                defaultExpandAll
                treeData={treeData}
                //onSelect={handleSelect}
                // titleRender={titleRender}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                titleRender={titleRender}
            />

            {/* <Tree defaultExpandAll>
                {tree}
            </Tree> */}
        </Wrapper>
    )
}

export default ListAddress