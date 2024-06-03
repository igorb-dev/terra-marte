export interface IContextApiValue {
    _listAddress: IListAddress[];
    _setListAddress: (value: IListAddress[]) => void;
    _removeAddressById: (id: number) => void;
    _addNewAddress: (id: IListAddress) => void;
    _editAddressById: (id: number, newData: IListAddress) => void;
  }

export interface IListAddress {
    id: number
    planet: string,
    name: string,
    codPhone: string,
    phone: string,
    street: string,
    city: string,
    state: string,
    country: string,
    number: string,
    quadrant: string,
}