export interface AddressRes {
  count: number;
  next: null;
  previous: null;
  results: Address[];
}

export interface Address {
  id: string;
  number: number;
  str_number: string;
  str_number_full: string;
  house: House;
}

export interface House {
  address: string;
  id: string;
  fias_addrobjs: string[];
}
