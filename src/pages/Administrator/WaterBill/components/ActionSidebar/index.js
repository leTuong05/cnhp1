import { Button } from 'antd'
import React from 'react'
// import { AddIcon, DeleteIcon, EditIcon } from '../Icon'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// const ButtonStyle = styled(Button)`
//     backgro                             und-color: transparent;
//     border: none;
//     box-shadow: unset;


//     &:hover {
//         background-color: white;

//     }
// `
const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    
`

const ActionSidebar = ({ fullAction, lessAction, key, className }) => {
    return (
        <>
            {lessAction ? (
                <div className={className}>
                    <Wrapper onClick={() => { console.log(11111); }}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Wrapper>
                </div>
                // <ButtonStyle className={className} onClick={() => console.log(`Button clicked for key: ${key}`)}>

                // </ButtonStyle>
            ) : (
                <div className={className}>
                    <Wrapper>
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faPlus} />
                    <FontAwesomeIcon icon={faPlus} />
                        {/* <AddIcon />
                        <EditIcon />
                        <DeleteIcon /> */}

                    </Wrapper>
                </div>


            )}

        </>

    )
}

export default ActionSidebar