import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  gap: 2.5em;
  padding: 10px;

  @media screen and (max-width: 1024px) {
    gap: 1.5em;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 2em;
    margin-top: -5em;
  }
`

export const Image = styled.img`
  width: 200px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }

  @media screen and (max-width: 1252px) {
    width: 150px;
  }

  @media screen and (max-width: 500px) {
    width: 312px;
    height: 200px;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8em;
  margin-right: 70px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0 40px;
    gap: 1em;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1.5em;
    align-items: center;
  }
`

export const Text = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: min(40px, 2.6vw);
  line-height: 48px;

  color: #0c0c0c;

  @media screen and (max-width: 1024px) {
    line-height: 37px;
  }

  @media screen and (max-width: 768px) {
    line-height: 30px;
    font-size: 25px;
  }
`
