import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin-bottom: 88px;

  @media screen and (max-width: 619px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 25px;
  }
`

export const Logo = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  cursor: pointer;

  color: #0c0c0c;
`

export const ContainerLink = styled.div`
  display: flex;
  gap: 57px;

  @media screen and (max-width: 619px) {
    gap: 36px;
    margin-top: 10px;
  }
`

export const LinkMenu = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: min(16px, 3.2vw);
  line-height: 22px;

  color: #0c0c0c;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`
