import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
background: ${props => props.color || 'blue'}; /* props 값 별 조건부 property 값 지정 */
padding: 1rem;
display: flex;
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* &를 이용해 자기 자신 선택 가능 like scss */
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* props 값 별 조건부 css 지정 */
    ${props =>
        props.inverted && css`
            background: none;
            border: 2px solid white;
            color: white;

            &:hover {
                background: white;
                color: black;
            }`
    }

    & + button {
        margin-left: 1rem;
    }
`


const StyledComponents = () => {
    return (
        <Box color="black">
            <Button>안녕하세요</Button>
            <Button inverted={true}>테두리만 </Button>
        </Box>
    )
};

export default StyledComponents;