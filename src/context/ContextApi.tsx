import React, { createContext, useContext, useState } from "react";
import { IContextApiValue, IListAddress } from "./ContextApi.types";

const ContextApiContext = createContext<IContextApiValue>(
  {} as IContextApiValue
);

interface ContextApiProviderProps {
  children: React.ReactNode;
}

const ContextApiProvider = ({ children }: ContextApiProviderProps) => {
    const [_listAddress, _setListAddress] = useState<IListAddress[]>([
            {id: 1, planet: "Terra", name: "Amazon Terraquea",codPhone: "888", phone: "2804331", street: "Terry Ave N", city: "Seattle", state: "WA", country: "Estados Unidos", number: "410", quadrant: ""},
            {id: 2, planet: "Terra", name: "Mercado Livre",codPhone: "55", phone: "40201735", street: "Av. Marte", city: "Santana de Parnaíba", state: "SP", country: "Brasil", number: "489", quadrant: ""},
            {id: 3, planet: "Marte", name: "Martian Delivery",codPhone: "9999", phone: "10011002", street: "", city: "", state: "", country: "", number: "", quadrant: "287"},
            {id: 4, planet: "Marte", name: "iFood Marciano",codPhone: "9999", phone: "12375940", street: "", city: "", state: "", country: "", number: "", quadrant: "5972"},
            {id: 5, planet: "Terra", name: "iFood Terraquea",codPhone: "55", phone: "94857193", street: "Av. Paulista", city: "São Paulo", state: "SP", country: "Brasil", number: "489", quadrant: ""},
            {id: 6, planet: "Marte", name: "Amazon Marciana",codPhone: "9999", phone: "76432564", street: "", city: "", state: "", country: "", number: "", quadrant: "7890"},
        ])

    const _removeAddressById = (id: number) => {
      const arrayEdit = _listAddress.filter(item => item.id !== id);
      _setListAddress(arrayEdit)
    }

    const _addNewAddress = (data: IListAddress) => {
      _setListAddress([..._listAddress, data]);
    }

    const _editAddressById = (id: number, newData: IListAddress) => {
      _setListAddress(prevList => prevList.map(item => {
          if (item.id === id) {
              return { ...item, ...newData };
          }
          return item;
      }));
  };

  const value = {
    _listAddress, _setListAddress, 
    _removeAddressById,
    _addNewAddress,
    _editAddressById
  };

  return (
    <ContextApiContext.Provider value={value}>
      {children}
    </ContextApiContext.Provider>
  );
};

export const useContextApi = () => useContext(ContextApiContext);
export { ContextApiProvider };
