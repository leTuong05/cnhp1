import { styled } from "styled-components";
import { Button, Tree } from 'antd';

export const Wrapper = styled.div`
    padding: 12px;
    margin-bottom: 16px;
    height: calc(100vh - 220px);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
    overflow: hidden auto;
`
export const StyledTree = styled(Tree)`
    .ant-tree-title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        &:hover {
            
            .hover {
                display: block;
            }
        }
    
    }

    .hover {
        display: none;
    }
    .ant-tree-node {
        background-color: black;
    }
    .ant-tree-treenode{
        width: 100%;
    }
    .ant-tree-node-content-wrapper {
        display: flex;
        width: 100%;
        background-color: white;
    }

    .ant-tree-node-selected .ant-tree-node-content-wrapper {
    }
    .ant-tree-switcher-noop{
    display: none;
    }

    .ant-tree-node-selected{
        color: black;
        background-color: white !important;
        font-weight: 700;
    }
`;