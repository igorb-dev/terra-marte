import * as Yup from 'yup';

export const schemaRegisterEarth = Yup.object({
    planet: Yup.object({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }).required('Escolha um planeta'),
    name: Yup.string().required('Digite um nome'),
    codPhone: Yup.string().required('Digite um nome'),
    phone: Yup.string().required('Digite um telefone'),
    street: Yup.string().required('Digite uma rua'),
    city: Yup.string().required('Digite uma cidade'),
    state: Yup.string().required('Digite uma cidade'),
    country: Yup.string().required('Digite uma cidade'),
    number: Yup.string().required('Digite um número'),
  }).required();

  export const schemaRegisterMars = Yup.object({
    planet: Yup.object({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }).required('Escolha um planeta'),
    name: Yup.string().required('Digite um nome'),
    codPhone: Yup.string().required('Digite um nome'),
    phone: Yup.string().required('Digite um telefone'),
    quadrant: Yup.number().min(1, 'O valor deve ser maior ou igual a 1').max(9999, 'O valor deve ser menor ou igual a 9999').required('Digite um quadrante'),
  }).required();