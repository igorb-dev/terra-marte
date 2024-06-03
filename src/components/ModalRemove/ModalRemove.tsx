import React from 'react'
import "./ModalRemove.styles.scss"

interface IModalRemove {
    closeModal: () => void;
    deleteAddress: () => void;
}

const ModalRemove = ({closeModal, deleteAddress}: IModalRemove) => {
  return (
    <div className='ModalRemove'>
        <div className='modal-content'>
            
            <p className='title'>Deseja excluir esse cadastro?</p>

            <div className='container-buttons'>
                <div className='button' style={{backgroundColor: "#FF7777"}} onClick={deleteAddress}><p>Sim</p></div>
                <div className='button' onClick={closeModal}><p>Não</p></div>
            </div>

        </div>
    </div>
  )
}

export default ModalRemove