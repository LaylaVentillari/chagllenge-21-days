import styled from 'styled-components';

export const Container = styled.div`
background-color: #121214;
position: fixed;
height: 100%;
width: 300px;
top: 0px;
left: 0px;
left: ${props => props.sidebar ? '0' : '-100%'};
animation: showSiderBar .4s;

> svg {
  position: fixed;
  color: #9E53B6;
  width: 30px;
  height: 30px;
  margin-top: 32px;
  margin-left: 32px;
  cursor: pointer;
}

@keyframes showSiderBar {
  from {
    opacity: 0;
    width: 0;
  }

  to {
    opacity: 1;
    width: 300px;
  }
}
`;

export const Content = styled.div `
margin-top: 100px

`;