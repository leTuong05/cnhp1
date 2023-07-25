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
    /* Style for tree node title */
    
    color: #444c5d;
    font-weight: 700;
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
    /* Custom styles for the button */
    /* position: absolute;
    top: 50%;
    right: -30px;
    transform: translateY(-50%); */
    display: none;
  }
    .ant-tree-node {
    /* Custom styles for tree nodes */
    background-color: black;
    }
    .ant-tree-treenode{
        width: 100%;
    }
    .ant-tree-node-content-wrapper {
    /* Custom styles for the content wrapper of tree nodes */
    display: flex;
    width: 100%;
    background-color: white;
    
   
    }

    .ant-tree-node-selected .ant-tree-node-content-wrapper {
    /* Custom styles for the selected tree node */
    }
    .ant-tree-switcher-noop{
    display: none;
    }
`;