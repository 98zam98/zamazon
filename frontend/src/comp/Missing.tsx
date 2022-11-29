import React, { FC, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

const Missing: FC = () => {
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      nav(-1);
    }, 500);
  }, [])

  return (
    <>
      <Helmet>
        <title>Missing</title>
      </Helmet>
      <div
        className='error'
      >
        you are lost
      </div>

    </>

  )
}

export default Missing