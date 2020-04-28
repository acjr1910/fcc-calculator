import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: gray;
`;

export const colors = {
  display: '#2B2B2B',
  operatorPads: {
    background: '#F79F13',
    rgbBorder: 'rgb(173,174,176, 0.6)',
  },
  numberPads: {
    pad: '#D8D9DA',
    content: '#08090B',
    border: '#ADAEB0',
    rgbBorder: 'rgb(173,174,176, 0.2)',
  },
};
