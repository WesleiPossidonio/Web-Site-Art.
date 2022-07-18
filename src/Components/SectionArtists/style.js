import styled from 'styled-components'

import backgroundImageOne from '../../Assets/backgroundImageOne.svg'
import backgroundImageThree from '../../Assets/backgroundImageThree.svg'
import backgroundImageTwo from '../../Assets/backgroundImageTwo.svg'

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding: 0 6%;
  margin-bottom: 7em;

  @media screen and (max-width: 1024px) {
    margin-bottom: 2em;
    margin-left: 4px;
  }
`

export const Title = styled.h1`
  margin-right: 27em;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;

  margin-bottom: 40px;
  color: #0c0c0c;

  @media screen and (max-width: 1262px) {
    margin-right: 20em;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 0;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  .ImageOne {
    background-image: url(${backgroundImageOne});
    width: 396px;
    height: 484px;
    background-repeat: no-repeat;

    @media screen and (max-width: 1262px) {
      width: 312px;
      background-size: contain;
    }
  }

  .ImageOne:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }

  .ImageTwo {
    background-image: url(${backgroundImageTwo});
    width: 396px;
    height: 484px;
    background-repeat: no-repeat;

    @media screen and (max-width: 1262px) {
      width: 312px;
      background-size: contain;
    }
  }

  .ImageTwo:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }

  .ImageThree {
    background-image: url(${backgroundImageThree});
    width: 396px;
    height: 484px;
    background-repeat: no-repeat;

    @media screen and (max-width: 1262px) {
      width: 312px;
      background-size: contain;
    }
  }

  .ImageThree:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }

  @media screen and (max-width: 1025px) {
    flex-wrap: wrap;
  }
`

export const ContainerItem = styled.div`
  width: 396px;
  height: 484px;
  border-radius: 4px;

  @media screen and (max-width: 1262px) {
    width: 312px;
  }
`

export const TitleItem = styled.h2`
  margin: 24px 0 8px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #f9f9f9;
`

export const Caption = styled.p`
  margin-left: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #ebebeb;
`
