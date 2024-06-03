import React, { useContext, useEffect, useState } from 'react'
import "./Register.styles.scss"
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import RegisterPageEarth from './RegisterPages/RegisterPageEarth/RegisterPageEarth'
import RegisterPageMars from './RegisterPages/RegisterPageMars/RegisterPageMars'

const Register = () => {
  const [planet, setPlanet] = useState<string>("Terra")
  const [colorBackground, setColorBackground] = useState<string>("#f0f0f7")

  console.log(planet)

  const bgPlanet = (value: string) => {
    switch (value) {
      default:
        return "#f0f0f7";
      case 'Terra':
        return "#def3ff";
      case 'Marte':
        return "#ffdede";
    }
  }

  useEffect(() => {
    const color = bgPlanet(planet)
    setColorBackground(color)
  }, [planet])

  return (
    <div className='Register' style={{backgroundColor: colorBackground}}>
      <Header/>

      <div className='container-body'>
   
          <p className='title'>Cadastro</p>

          <div className='line'/>

          <Select
              name="week_day"
              label="Planeta"
              value={planet}
              colorLabel="#9c98a6"
              onChange={(e) => setPlanet(e.target.value)}
              options={[
                  { value: "Terra", label: "Terra" },
                  { value: "Marte", label: "Marte" },
              ]}
              sizeFont={16}
          />

          {planet === "Terra" && <RegisterPageEarth />}
          {planet === "Marte" && <RegisterPageMars />}
      </div>
    </div>
  )
}

export default Register