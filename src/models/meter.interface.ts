import { Address } from './address.interface';
import { MeterType } from './meterType.enum';

export interface MeterRes {
  count: number;
  next: string;
  previous: null;
  results: Meter[];
}

export interface Meter {
  id: string;
  _type: MeterType[];
  area: Area;
  is_automatic: boolean | null;
  communication: string;
  description: string;
  serial_number: string;
  installation_date: Date;
  brand_name: null | string;
  model_name: null | string;
  initial_values: number[];
  address?: Address;
}

export interface Area {
  id: string;
}
