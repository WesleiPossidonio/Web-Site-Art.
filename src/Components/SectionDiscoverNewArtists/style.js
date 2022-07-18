import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 436px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 80px;

  @media screen and (max-width: 820px) {
    margin-bottom: -40px;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 2em;

  @media screen and (max-width: 820px) {
    margin-top: 6em;
  }

  @media screen and (max-width: 500px) {
    margin-top: 4em;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: min(48px, 3.5vw);

  color: #0c0c0c;

  @media screen and (max-width: 500px) {
    font-size: min(48px, 6.8vw);
    margin-left: 5px;
  }
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: min(24px, 2vw);
  line-height: 29px;
  margin-bottom: 25px;

  color: #737373;

  @media screen and (max-width: 820px) {
    margin-bottom: 2px;
  }

  @media screen and (max-width: 500px) {
    font-size: min(24px, 4.3vw);
    margin-left: 5px;
  }
`

export const ContainerStatistics = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'totalArtists totalSales totalAssessments'
    'artists sales assessments';
  gap: 5px;
  margin-top: 20px;

  .totalArtists {
    grid-area: totalArtists;
  }

  .totalSales {
    grid-area: totalSales;
  }

  .totalAssessments {
    grid-area: totalAssessments;
  }

  .artists {
    grid-area: artists;
  }

  .sales {
    grid-area: sales;
  }

  .assessments {
    grid-area: assessments;
  }

  @media screen and (max-width: 820px) {
    margin-top: 2px;
  }
`

export const NumberStatistics = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: min(32px, 3vw);
  line-height: 39px;

  color: #0c0c0c;

  @media screen and (max-width: 500px) {
    font-size: min(32px, 5.8vw);
  }
`

export const NameStatistics = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: min(16px, 2vw);
  line-height: 19px;
  margin-left: 1.7em;
  color: #737373;

  @media screen and (max-width: 820px) {
    margin-left: 0.5em;
    margin-top: -5px;
  }

  @media screen and (max-width: 500px) {
    font-size: min(16px, 3.4vw);
    margin-left: 5px;
    margin-top: -10px;
    margin-left: 1.1em;
    gap: 0;
  }
`

export const Image = styled.img`
  width: min-content(396px, 30vw);
  border-radius: 4px;

  @media screen and (max-width: 820px) {
    width: 260px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`
