import React, { useEffect, useState } from 'react'
import "./ModalEdit.styles.scss"
import ModalEditPagesEarth from './ModalEditPages/ModalEditPagesEarth/ModalEditPagesEarth';
import RegisterPageEarth from '../../pages/Register/RegisterPages/RegisterPageEarth/RegisterPageEarth';
import Select from '../Select/Select';
import svgClose from "../../assets/SvgClose.svg"
import { useContextApi } from '../../context/ContextApi';
import { IListAddress } from '../../context/ContextApi.types';
import RegisterPageMars from '../../pages/Register/RegisterPages/RegisterPageMars/RegisterPageMars';

interface IModalEdit {
    closeModal: () => void;
    idCadastro: number;
}

const ModalEdit = ({closeModal, idCadastro}: IModalEdit) => {
    const [planet, setPlanet] = useState<string>("");
    const [selectAddress, setSelectAddress] = useState<IListAddress>();

    const {_listAddress} = useContextApi();

    useEffect(() => {
        const address = _listAddress.filter(item => item.id === idCadastro)[0]
        setSelectAddress(address)
        setPlanet(address.planet)
    },[])


  return (
    <div className='ModalEdit'>
        <div className='modal-content'>

            <div className='container-close'>
                <div className='close' onClick={closeModal}><img src={svgClose} alt="fechar" /></div>
            </div>

            <p className='title'>Editar Cadastro</p>

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

              {planet === "Terra" && <RegisterPageEarth dataEdit={selectAddress} closeModal={closeModal} />}
              {planet === "Marte" && <RegisterPageMars dataEdit={selectAddress} closeModal={closeModal}/>}
            

        </div>
    </div>
  )
}

export default ModalEdit