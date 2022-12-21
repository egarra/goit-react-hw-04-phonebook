import styled from 'styled-components';

export const InputForm = styled.form`
    border: 2px solid teal;
    padding: 20px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 5px;
` 

export const Btn = styled.button `
    padding: 10px;
    border-radius: 5px;
    background: grey;
    border: 1px solid grey;
    color: white;

    &:hover {
        background: teal;
        border: 1px solid teal;
        border-radius: 5px;
        color: white;
    }
`

export const InputField = styled.input `
    padding: 5px;
`