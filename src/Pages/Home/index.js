import React from 'react'

import {
  Header,
  SectionNewArtists,
  SectionCollections,
  SectionArtists,
  Footer
} from '../../Components'

const Home = () => {
  return (
    <>
      <Header />
      <SectionNewArtists />
      <SectionCollections />
      <SectionArtists />
      <Footer />
    </>
  )
}

export default Home
