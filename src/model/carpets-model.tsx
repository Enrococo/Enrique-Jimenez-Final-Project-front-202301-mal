import { APIStatus } from '../shared/models/apistatus';

export interface Carpet {
  name: string;
  thumb: string;
  price: string;
}

export interface Carpets {
  carpets: Carpet[];
}

export interface CarpetState extends Carpets {
  status: APIStatus;
}
