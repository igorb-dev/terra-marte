import React, { useContext, useEffect, useState } from 'react'
import "./Address.styles.scss"
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Card from '../../components/Card/Card'
import { useContextApi } from '../../context/ContextApi'
import svgPlus from "../../assets/SvgPlus.svg"
import { useNavigate } from 'react-router-dom'
import ModalEdit from '../../components/ModalEdit/ModalEdit'
import ModalRemove from '../../components/ModalRemove/ModalRemove'

const Address = () => {
  const [search, setSearch] = useState<string>("")
  const [planet, setPlanet] = useState<string>("")
  const [colorBackground, setColorBackground] = useState<string>("#f0f0f7")
  const [deleteMessage, setDeleteMessage] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [idSelect, setIdSelect] = useState<number>(0)
  const [modalRemove, setModalRemove] = useState<boolean>(false)

  const {_listAddress, _removeAddressById} = useContextApi()
  const navigation = useNavigate()

  function deleteMsg() {
    setModalRemove(false)
    setDeleteMessage(true);
    setTimeout(() => {
      setDeleteMessage(false);
    }, 2000);
  }

  const filterName = search ? _listAddress.filter(item => item.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())) : _listAddress
  const filterPlanet = planet ? filterName.filter(item => item.planet === planet) : filterName

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

  const editAddress = (id: number) => {
    setIdSelect(id)
    setOpenModal(true)
  }

  const deleteAddress = () => {
    _removeAddressById(idSelect)
    deleteMsg()
  }

  const openModalDelete = (id: number) => {
    setIdSelect(id)
    setModalRemove(true)
  }

  useEffect(() => {
    const color = bgPlanet(planet)
    setColorBackground(color)
  }, [planet])

  return (
    <div className='Address' style={{backgroundColor: colorBackground}}>
      <Header/>

      {deleteMessage && (
            <div className="popup">
              <p>Cadastrado deletado com sucesso!</p>
            </div>
        )}

      <div className='container-header-buttons'>
        <div className='container-input'>
          <Input
              name="search"
              label='Pesquisar'
              placeholder='...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='container-select'>
          <Select
              name="week_day"
              label="Planeta"
              value={planet}
              colorLabel="#E6E6F0"
              onChange={(e) => setPlanet(e.target.value)}
              options={[
                  { value: "", label: "Todos" },
                  { value: "Terra", label: "Terra" },
                  { value: "Marte", label: "Marte" },
              ]}
          />
        </div>
      </div>

      <div className='container-body'>
              {filterPlanet.map(item => (
                <Card 
                  key={item.id} 
                  data={item}
                  botEdit={editAddress}
                  botDelete={openModalDelete} 
                />))}
                <div className='add-new-adress' onClick={() => navigation("/Register")}>
                  <img src={svgPlus} alt="" />
                </div>
      </div>

      {openModal && <ModalEdit closeModal={() => setOpenModal(false)} idCadastro={idSelect} />}
      {modalRemove && <ModalRemove closeModal={() => setModalRemove(false)} deleteAddress={()=>deleteAddress()}/>}
    </div>
  )
}

export default Address