import styled from 'styled-components';

export const Container = styled.div `
display: flex;
align-items: center;
background-color: #0d0d0d;
fonts-size: 20px;
color: #9E53B6;
padding: 10px;
cursor: pointer;
border-radius: 10px;
margin: 0 15px 20px;

> svg {
  margin: 0 20px;
  }
  &:hover {
    background-color: black;
  }
`