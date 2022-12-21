import styled from 'styled-components';

export const List = styled.ul `
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 20px;
    border: 2px solid teal; 
    border-radius: 5px;
    padding: 20px;
    list-style: none;
    margin-top: 20px;
    align-items: center;
`

export const ListItem = styled.li `
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Text = styled.p `
    font-size: 20px;
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


