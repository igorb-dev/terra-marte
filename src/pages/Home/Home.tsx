import React, { useContext } from 'react'
import "./Home.styles.scss"
import logoHome from "../../assets/SvgTerraMarte.svg"
import svgLocation from "../../assets/SvgLocation.svg"
import svgRocket from "../../assets/SvgRocket.svg"
import { useNavigate } from 'react-router-dom'
import { useContextApi } from '../../context/ContextApi'


const Home = () => {
    const navigation = useNavigate()
    const {_listAddress} = useContextApi()

  return (
    <div className='Home'>
        <div className='home-container'> 
            
            <div className='container-top'>
                <div className='container-logo'><img src={logoHome} alt="logo" /></div>
                <div>
                    <p className='logo-title'>TERRA MARTE</p>
                    <p className='logo-body'>Delivery Interplanetário</p>
                </div>
            </div>

            <div className='container-bottom'>
                <div className='container-buttons'>
                    <div className='button' onClick={() => navigation("/List")}><img src={svgLocation} alt="localizacao" /><p>Endereços</p></div>
                    <div className='button' onClick={() => navigation("/Register")}><img src={svgRocket} alt="cadastrar" /><p>Cadastrar</p></div>
                </div>

                <div className='total'><p>Total de {_listAddress.length} endereços cadastrados</p></div>
            </div>
        </div>
    </div>
  )
}

export default Home