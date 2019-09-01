import styled from 'styled-components';
import { device } from '../../../utils/styles';

export const ProductList = styled.ul`
  width: 100%;
  max-width: 500px;
  margin-top: 0.5em;

  @media ${device.tablet} {
    max-width: 100%;
    display: grid;
    grid-template-columns: ${(props: { columns: number }) =>
      `repeat(${props.columns}, 1fr)`};
    grid-column-gap: 2em;
  }
`;