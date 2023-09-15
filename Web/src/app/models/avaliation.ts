export class Avaliation {
  id!: string;
  email!: string;
  confirmed!: boolean;
  emailHash!: string;
  location!: Location_;
  building!: Building;
  room!: Room;
  classification!: number;
  reading!: Reading[];
  token!: string;
  created_At!: string;
  updated_At!: string;
  [key: string]: any;
}

export class Location_ {
  latitude!: number;
  longitude!: number;
  postCode!: string;
  city!: string;
  address!: string;
  district!: string;
  municipality!: string; 
  nutsI!: string;
  nutsII!: string;
  nutsIII!: string;
  gamaValue!: number;
}

export class Building {
  age!: number;
  nFloors!: number;
}

export class Room {
  floorBase!: string;
  floorFinish!: string;
  wallBase!: string;
  wallFinish!: string;
  ventilation!: string;
  retrofit!: number;
  floor!: number;
  nBellowFloors!: number;
}

export class Reading {
  id!: string;
  startDate!: Date;
  endDate!: Date;
  device!: string;
  value!: number;
}


export interface IAvaliation {
  id: string;
  email: string;
  confirmed: boolean;
  emailHash: string;
  city: string;
  postCode: string;
  floorBase: string;
  floorFinish: string;
  wallBase: string;
  wallFinish: string;
  ventilation: string;
  retrofit: number;
  floor: number;
  nBellowFloors: number;
  classification: number;
  reading: Reading[];
  token: string;
  created_At: string;
  updated_At: string;
}