import styled from 'styled-components';

export const WapperSigin= styled.div`
    position: relative;
`

export const FormSigin = styled.div`
    position: absolute;
    padding: 16px 20px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(21, 67, 152, 0.1) 0px 0px 30px;
    top: -56px;

    .button {
        margin-left: -58px;
        width: 100%; 
        background: var(--btn-primary-color); 
        color: #fff;
        font-Size: 14;
        font-Weight: 600;
    }

    h1 {
        margin: 20px 0;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }

    .ant-input {
        /* width: 348px; */
    }

    .form {

    }

`
export const ImgFB = styled.div`
    margin-top: 300px;

    img {
        width: 100%;
    }
`