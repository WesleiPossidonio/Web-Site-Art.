import React from 'react'

import {
  Container,
  Title,
  ContainerImage,
  ContainerItem,
  TitleItem,
  Caption
} from './style'

export const SectionArtists = () => {
  return (
    <Container>
      <Title>Artistas</Title>
      <ContainerImage>
        <ContainerItem className="ImageOne">
          <TitleItem>Sabine Lowe</TitleItem>
          <Caption>Design e Fotógrafa</Caption>
        </ContainerItem>
        <ContainerItem className="ImageTwo">
          <TitleItem>Eleanor Pena</TitleItem>
          <Caption>Escritora e Design</Caption>
        </ContainerItem>
        <ContainerItem className="ImageThree">
          <TitleItem>Leslie Alexander</TitleItem>
          <Caption>Diretora de arte</Caption>
        </ContainerItem>
      </ContainerImage>
    </Container>
  )
}
