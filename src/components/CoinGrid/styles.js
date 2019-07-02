import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 15px;
`;

export const CoinImage = styled.img`
  padding-top: 10px;
  margin: 0px 15px;
  height: 45px;
`;

export const CoinText = styled.h2``;
