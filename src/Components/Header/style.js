import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 83px;

  div {
    display: flex;
    gap: 4em;

    @media screen and (max-width: 768px) {
      gap: 2em;
    }
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 650px) {
    justify-content: space-between;
    padding: 0 20px;
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

export const Input = styled.input`
  width: 644px;
  height: 40px;
  left: 638px;
  top: 40px;
  border: none;
  padding: 10px;

  background: #ebebeb;
  border-radius: 4px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #737373;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 350px;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`
