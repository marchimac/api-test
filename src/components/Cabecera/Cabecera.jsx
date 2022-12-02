import React from 'react'
import BarraNavegacion from '../BarraNavegacion/BarraNavegacion'
import Buscador from '../Buscador/Buscador'
import './Cabecera.scss'

const Cabecera = () => {
  return (
    <div className='holder' >
      <header className='header'>
        <BarraNavegacion />
        <div className='header-content flex flex-c text-center text textt-white'>
          <h2 className='header-title text-capitalice'>Encuentra tu libro</h2><br />
          <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo velit, at libero debitis dolores molestias deleniti beatae aperiam, inventore praesentium quibusdam eius molestiae pariatur.</p>
          <Buscador />
        </div>
      </header>
    </div>
  )
}

export default Cabecera