import React from 'react'
import { Helmet } from 'react-helmet-async'
import Mainer from './Mainer'

const Home = () => {
  return (
    <>

      <Helmet>
        <title>ZAMAZON - Home</title>
      </Helmet>

      <Mainer />
    </>
  )
}

export default Home