import React, { useEffect, useState } from 'react'
import "./RegisterPageEarth.styles.scss"
import { Controller, useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { schemaRegisterEarth } from '../../Register.types';
import Input from '../../../../components/Input/Input';
import svgExclamation from "../../../../assets/SvgExclamation.svg"
import { useContextApi } from '../../../../context/ContextApi';
import { useNavigate } from 'react-router-dom';
import { IListAddress } from '../../../../context/ContextApi.types';

interface IRegisterPageEarth {
    dataEdit?: IListAddress
    closeModal?: () => void
}


const RegisterPageEarth = ({dataEdit, closeModal}: IRegisterPageEarth) => {
    const [sucess, setSucess] = useState<boolean>(false)
    const [sucessEdit, setSucessEdit] = useState<boolean>(false)
    
    const {_addNewAddress, _listAddress, _editAddressById} = useContextApi();
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
        resolver: yupResolver(schemaRegisterEarth),
        defaultValues: {
            planet: {label: "Terra", value: "Terra"},
            name: "",
            codPhone: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            country: "",
            number: "",
        },
      });

      useEffect(() => {
        if(dataEdit) {
            setValue("name", dataEdit.name)
            setValue("codPhone", dataEdit.codPhone)
            setValue("phone", dataEdit.phone)
            setValue("street", dataEdit.street)
            setValue("city", dataEdit.city)
            setValue("state", dataEdit.state)
            setValue("country", dataEdit.country)
            setValue("number", dataEdit.number)
        }
      }, [])

    const next = (data: any) => {
        let maxId = _listAddress.reduce((max, address) => address.id > max ? address.id : max, 0);

        if (dataEdit) {
            const newSave = {
                id: dataEdit.id,
                planet: "Terra",
                name: data.name,
                codPhone: data.codPhone,
                phone: data.phone,
                street: data.street,
                city: data.city,
                state: data.state,
                country: data.country,
                number: data.number,
                quadrant: "",
            }

            _editAddressById(dataEdit.id, newSave)
            sucessEditMessage()

        } else {
            const newSave = {
                id: maxId + 1,
                planet: "Terra",
                name: data.name,
                codPhone: data.codPhone,
                phone: data.phone,
                street: data.street,
                city: data.city,
                state: data.state,
                country: data.country,
                number: data.number,
                quadrant: "",
            }
    
            _addNewAddress(newSave);
            sucessMessage()
        }
    }
     
  return (
    <div className='RegisterPageEarth'>

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
                                label='Código país'
                                value={value}
                                onChange={onChange}
                                colorTitle='#9c98a6'
                                type="number"
                                sizeFont={16}
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
                    name="country"
                    render={({field: {onChange, value}}) => (
                    <>
                        <div className="InputBox">
                            <Input
                                {...register('country')}
                                name="country"
                                label='País'
                                value={value}
                                onChange={onChange}
                                colorTitle='#9c98a6'
                                sizeFont={16}
                            />
                        </div>
                        {errors.country && (
                            <p className="labelError">
                            {errors.country?.message}
                            </p>
                        )}
                    </>
                    )}
                />


        <Controller
            control={control}
            name="state"
            render={({field: {onChange, value}}) => (
            <>
                <div className="InputBox">
                    <Input
                        {...register('state')}
                        name="state"
                        label='Estado'
                        value={value}
                        onChange={onChange}
                        colorTitle='#9c98a6'
                        sizeFont={16}
                    />
                </div>
                {errors.state && (
                    <p className="labelError">
                    {errors.state?.message}
                    </p>
                )}
            </>
            )}
        />

        <Controller
            control={control}
            name="city"
            render={({field: {onChange, value}}) => (
            <>
                <div className="InputBox">
                    <Input
                        {...register('city')}
                        name="city"
                        label='Cidade'
                        value={value}
                        onChange={onChange}
                        colorTitle='#9c98a6'
                        sizeFont={16}
                    />
                </div>
                {errors.city && (
                    <p className="labelError">
                    {errors.city?.message}
                    </p>
                )}
            </>
            )}
        />

        <div className='container-street'>
            <div className='street'>
                <Controller
                    control={control}
                    name="street"
                    render={({field: {onChange, value}}) => (
                    <>
                        <div className="InputBox">
                            <Input
                                {...register('street')}
                                name="street"
                                label='Rua'
                                value={value}
                                onChange={onChange}
                                colorTitle='#9c98a6'
                                sizeFont={16}
                            />
                        </div>
                        {errors.street && (
                            <p className="labelError">
                            {errors.street?.message}
                            </p>
                        )}
                    </>
                    )}
                />
            </div>

            <div className='number'>
                <Controller
                    control={control}
                    name="number"
                    render={({field: {onChange, value}}) => (
                    <>
                        <div className="InputBox">
                            <Input
                                {...register('number')}
                                name="number"
                                label='Número'
                                value={value}
                                onChange={onChange}
                                colorTitle='#9c98a6'
                                sizeFont={16}
                            />
                        </div>
                        {errors.number && (
                            <p className="labelError">
                            {errors.number?.message}
                            </p>
                        )}
                    </>
                    )}
                />
            </div>
        </div>
          
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

export default RegisterPageEarth