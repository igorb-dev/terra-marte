import React, { useEffect, useState } from 'react'
import "./RegisterPageMars.styles.scss"
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegisterMars } from '../../Register.types';
import Input from '../../../../components/Input/Input';
import svgExclamation from "../../../../assets/SvgExclamation.svg"
import { useContextApi } from '../../../../context/ContextApi';
import { useNavigate } from 'react-router-dom';
import { IListAddress } from '../../../../context/ContextApi.types';

interface IRegisterPageMars {
  dataEdit?: IListAddress
  closeModal?: () => void;
}

const RegisterPageMars = ({dataEdit, closeModal}: IRegisterPageMars) => {
  const [sucess, setSucess] = useState<boolean>(false);
  const [sucessEdit, setSucessEdit] = useState<boolean>(false)

  console.log(dataEdit)

  const {_listAddress, _addNewAddress, _editAddressById} = useContextApi();
  const navigation = useNavigate()

  function sucessMessage() {
    setSucess(true);
    setTimeout(() => {
        setSucess(false);
        navigation("/List")
    }, 2000);
  }

  function sucessEditMessage() {
    setSucessEdit(true);
    setTimeout(() => {
        setSucessEdit(false);
        closeModal && closeModal()
    }, 2000);
  }

  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaRegisterMars),
    defaultValues: {
        planet: {label: "Terra", value: "Terra"},
        name: "",
        codPhone: "9999",
        phone: "",
        quadrant: 0,
    },
  });

  useEffect(() => {
    if(dataEdit) {
        setValue("name", dataEdit.name)
        setValue("codPhone", dataEdit.codPhone)
        setValue("phone", dataEdit.phone)
        setValue("quadrant", +dataEdit.quadrant)
    }
  }, [])

  const next = (data:any) => {
    let maxId = _listAddress.reduce((max, address) => address.id > max ? address.id : max, 0);

    if (dataEdit) {
      const newSave = {
        id: dataEdit.id,
        planet: "Marte",
        name: data.name,
        codPhone: data.codPhone,
        phone: data.phone,
        street: "",
        city: "",
        state: "",
        country: "",
        number: "",
        quadrant: data.quadrant,
    }

      _editAddressById(dataEdit.id, newSave)
      sucessEditMessage()


    } else {
      const newSave = {
        id: maxId + 1,
        planet: "Marte",
        name: data.name,
        codPhone: data.codPhone,
        phone: data.phone,
        street: "",
        city: "",
        state: "",
        country: "",
        number: "",
        quadrant: data.quadrant,
    }

      _addNewAddress(newSave);
      sucessMessage()
    }

    
  }
  
  return (
    <div className='RegisterPageMars'>

        {sucess && (
            <div className="popup">
              <p>Cadastrado com sucesso!</p>
            </div>
        )}

        {sucessEdit && (
            <div className="popup">
            <p>Editado com sucesso!</p>
        </div>
        )}

          <Controller
            control={control}
            name="name"
            render={({field: {onChange, value}}) => (
              <>
                <div className="InputBox">
                    <Input
                        {...register('name')}
                        name="name"
                        label='Nome'
                        value={value}
                        onChange={onChange}
                        colorTitle='#9c98a6'
                        sizeFont={16}
                    />
                </div>
                {errors.name && (
                    <p className="labelError">
                      {errors.name?.message}
                    </p>
                  )}
              </>
            )}
          />

          <div className='container-telefone'>
            <div className='codPhone'>
                <Controller
                    control={control}
                    name="codPhone"
                    render={({field: {onChange, value}}) => (
                    <>
                        <div className="InputBox">
                            <Input
                                {...register('codPhone')}
                                name="codPhone"
                                label='Código Marte'
                                value={9999}
                                onChange={onChange}
                                colorTitle='#9c98a6'
                                type="number"
                                sizeFont={16}
                                disabled
                            />
                        </div>
                        {errors.codPhone && (
                            <p className="labelError">
                            {errors.codPhone?.message}
                            </p>
                        )}
                    </>
                    )}
                />
            </div>

            <div className='phone'>
                <Controller
                    control={control}
                    name="phone"
                    render={({field: {onChange, value}}) => (
                    <>
                        <div className="InputBox">
                            <Input
                                {...register('phone')}
                                name="phone"
                                label='Telefone'
                                value={value}
                                onChange={onChange}
                                colorTitle='#9c98a6'
                                type="number"
                                sizeFont={16}
                            />
                        </div>
                        {errors.phone && (
                            <p className="labelError">
                            {errors.phone?.message}
                            </p>
                        )}
                    </>
                    )}
                />
            </div>
          </div>

          <Controller
            control={control}
            name="quadrant"
            render={({field: {onChange, value}}) => (
              <>
                <div className="InputBox">
                    <Input
                        {...register('quadrant')}
                        name="quadrant"
                        label='Quadrante (1 ao 9999)'
                        value={value}
                        onChange={onChange}
                        colorTitle='#9c98a6'
                        sizeFont={16}
                        type='number'
                    />
                </div>
                {errors.quadrant && (
                    <p className="labelError">
                      {errors.quadrant?.message}
                    </p>
                  )}
              </>
            )}
          />


        <div className='footer'>
          <div className='container-important'>
              <img src={svgExclamation} alt="importante" />
              <div className='container-important-message'>
                  <p>Importante!</p>
                  <p>Preencha todos os campos</p>
              </div>
          </div>
          <div className='button' onClick={handleSubmit(next)}><p>Salvar Cadastro</p></div>
        </div>

    </div>
  )
}

export default RegisterPageMars