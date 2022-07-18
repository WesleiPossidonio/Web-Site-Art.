import React from 'react'

import ImgNewArtists from '../../Assets/imageNewArtists.svg'
import { Button } from '../../Components'
import {
  Container,
  ContainerItens,
  Title,
  Text,
  ContainerStatistics,
  NumberStatistics,
  NameStatistics,
  Image
} from './style'

export const SectionNewArtists = () => {
  return (
    <Container>
      <ContainerItens>
        <Title>
          Descubra novos artistas <br /> e suas obras
        </Title>
        <Text>Uma nova geração de jovens artistas surgem</Text>
        <Button responsive={true}>EXPLORAR</Button>
        <ContainerStatistics>
          <NumberStatistics className="totalArtists">+2 mil</NumberStatistics>
          <NumberStatistics className="totalSales">+7 mil</NumberStatistics>
          <NumberStatistics className="totalAssessments">
            +16 mil
          </NumberStatistics>
          <NameStatistics className="artists">Artitas</NameStatistics>
          <NameStatistics className="sales">Vendas</NameStatistics>
          <NameStatistics className="assessments">Avaliações</NameStatistics>
        </ContainerStatistics>
      </ContainerItens>
      <Image src={ImgNewArtists} alt="imagem de um quadro" />
    </Container>
  )
}
