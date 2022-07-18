import React from 'react'

import { Button } from '../Button'
import { Container, Logo, Input } from './style'

export const Header = () => {
  return (
    <Container>
      <Logo>Art.</Logo>
      <div>
        <Input type="search" placeholder="Buscar " />
        <Button headerResposive>Entrar</Button>
      </div>
    </Container>
  )
}
