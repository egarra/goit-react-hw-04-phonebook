import styled from 'styled-components';

export const InputField = styled.input `
    padding: 5px;
    width: 324px;
    border: 5px solid teal;
    border-radius: 1px;
    margin-top: 5px;

    &:focus {
        border: 5px solid blue;
        outline: none;
    }
`