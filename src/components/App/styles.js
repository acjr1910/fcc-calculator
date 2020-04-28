import styled from 'styled-components';
import { colors } from '../../styles';

export const Wrapper = styled.div`
  width: 240px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  align-self: center;
  background: ${colors.numberPads.pad};
  box-shadow: 0px 5px 12px rgb(0, 0, 0, 0.3);
  .calculator {
    &__display {
      font-size: 1.8rem;
      padding: 1.2rem 0.8rem;
      width: 100%;
      color: white;
      background: ${colors.display};
    }
    &__leftpads {
      display: flex;
      flex-wrap: wrap;
      width: 75%;
    }
    &__rightpads {
      width: 25%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    &__numpad,
    &__decimalpad,
    &__equalspad {
      width: 33%;
      background: ${colors.numberPads.pad};
      border: 1px solid ${colors.numberPads.rgbBorder};
      color: ${colors.numberPads.content};
      padding: 0.8rem 1rem;
    }
    &__operatorpad,
    &__clearpad {
      width: 100%;
      border: 1px solid ${colors.operatorPads.rgbBorder};
      background: ${colors.operatorPads.background};
      color: white;
      padding: 1rem 0;
    }
  }
`;
