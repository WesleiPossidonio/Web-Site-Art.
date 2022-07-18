import React from 'react'

import imgCollectionOne from '../../Assets/imgCollectionOne.svg'
import imgCollectionThree from '../../Assets/imgCollectionThree.svg'
import imgCollectionTwo from '../../Assets/imgCollectionTwo.svg'
import { Button } from '../Button'
import { Container, ContainerImage, Image, ContainerItens, Text } from './style'

export const SectionCollections = () => {
  return (
    <Container>
      <ContainerImage>
        <Image src={imgCollectionOne} />
        <Image src={imgCollectionTwo} />
        <Image src={imgCollectionThree} />
      </ContainerImage>
      <ContainerItens>
        <Text>
          Confira as
          <br /> ultimas coleções
        </Text>
        <Button responsive={true}>VER MAIS</Button>
      </ContainerItens>
    </Container>
  )
}
