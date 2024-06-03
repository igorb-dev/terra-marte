import React from 'react'
import "./Card.styles.scss"

import bgTerra from "../../assets/BGTerra.png"
import bgMarte from "../../assets/BGMarte.png"
import svgPhone from "../../assets/SvgPhone.svg"
import svgLocation20 from "../../assets/SvgLocation20.svg"
import svgTrash from "../../assets/SvgTrash.svg"
import svgEdit from "../../assets/SvgEdit.svg"
import { IListAddress } from '../../context/ContextApi.types'

interface ICard {
    data: IListAddress
    botEdit: (value: number)=> void;
    botDelete: (value: number)=> void;
}

const Card = ({data, botEdit, botDelete}: ICard) => {
    const maxLength = 50;

    const addressEarth = `${data.number} ${data.street}, ${data.city}, ${data.state} - ${data.country}`;
    const addressMars = `Quadrante ${data.quadrant}`

    const address = data.planet === "Terra" ? addressEarth : addressMars;

  return (
    <div className='Card'>
        <div className='container-img'><img src={data.planet === "Terra" ? bgTerra : bgMarte} alt="bg" /></div>
        <div className='card-body'>
            <div className='tag'>
                <p  style={{backgroundColor: data.planet === "Terra" ? "#38C6F7" : "#FF7777"}}>{data.planet}</p>
            </div>
            <div className='container-infos'>
                <p className='name'>{data.name}</p>
                <p className='phone'><img src={svgPhone} alt="telefone" />({data.codPhone}) {data.phone}</p>
                <p className='address'><img src={svgLocation20} alt="local" />{address.length > maxLength ? address.slice(0, maxLength) + '...' : address}</p>
            </div>

            <div className='container-buttons'>
                <div className='buttons'>
                    <button onClick={() => botEdit(data.id)}><img src={svgEdit} alt="editar" /> Editar</button>
                    <button onClick={() => botDelete(data.id)}><img src={svgTrash} alt="excluir" /> Excluir</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Card