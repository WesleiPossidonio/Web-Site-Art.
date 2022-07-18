import styled, { css } from 'styled-components'

export const ContainerButton = styled.button`
  width: 188px;
  height: 40px;
  left: 1386px;
  top: 40px;
  border: none;

  background: #3772ff;
  border-radius: 4px;
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;

  text-transform: uppercase;

  color: #f9f9f9;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }

  ${({ responsive }) =>
    responsive &&
    css`
      @media screen and (max-width: 500px) {
        width: 300px;
      }
    `}

  ${({ headerResposive }) =>
    headerResposive &&
    css`
      @media screen and (max-width: 660px) {
        width: 120px;
      }
    `}
`
