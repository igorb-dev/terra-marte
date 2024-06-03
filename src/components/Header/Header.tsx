import React from 'react'
import "./Header.styles.scss"

import svgLogo40 from "../../assets/SvgTerraMarte40.svg"
import svgBack from "../../assets/SvgBack.svg"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='Header'>
        <div className='header-container'>
            
            <div className='container-header-top'>
                <div className='container-back' onClick={() =>navigate("/")}><img src={svgBack} alt="voltar" /></div>
                <div className='container-logo'><img src={svgLogo40} alt="logo" /></div>
            </div>
     
        </div>
    </div>
  )
}

export default Header