import React from 'react'
import { Outlet } from 'react-router-dom'
import Cabecera from '..//../components/Cabecera/Cabecera'

const Home = () => {
  return (
    <main>
      <Cabecera />
      <Outlet />
    </main>
  )
}

export default Home