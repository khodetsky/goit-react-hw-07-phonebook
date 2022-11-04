import styled from 'styled-components';

export const ItemContentBox = styled.p`
width: 180px;`

export const ListItemStyled = styled.li`
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 10px;

font-weight: 500;`;

export const DeleteButton = styled.button`
width: 80px;
border-radius: 5px;
border: 1px solid black;
cursor: pointer;


:hover,
:focus {
    background-color: blue;
    color: white;
    border-color: blue;
}`;