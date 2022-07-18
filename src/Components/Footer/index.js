import React from 'react'

import { Container, Logo, ContainerLink, LinkMenu } from './style'

export const Footer = () => {
  return (
    <Container>
      <Logo>Art.</Logo>
      <ContainerLink>
        <LinkMenu>INICIO</LinkMenu>
        <LinkMenu>BUSCAR</LinkMenu>
        <LinkMenu>EXPLORAR</LinkMenu>
        <LinkMenu>SOBRE NÓS</LinkMenu>
      </ContainerLink>
    </Container>
  )
}
