import { Address, AddressRes } from '../models/address.interface';
import { MeterRes } from '../models/meter.interface';

const host = 'http://showroom.eis24.me/api/v4/test';

const addressBucket: { [key: string]: Address } = {};

export const getMeters = async (limit: number, offset: number) => {
  try {
    const res = await fetch(`${host}/meters?limit=${limit}&offset=${offset}`, {
      method: 'GET',
    });
    const data: MeterRes = await res.json();
    for (const meter of data.results) {
      let address: Address;
      if (addressBucket[meter.area.id]) {
        address = addressBucket[meter.area.id];
      } else {
        const addresses = await getAddress(meter.area.id);
        if (!addresses) return;

        address = addresses[0] ?? null;
        addressBucket[meter.area.id] = address;
      }
      meter.address = address;
    }
    return data.results;
  } catch (e) {
    console.error(e);
  }
};

export const getAddress = async (id: string) => {
  try {
    const res = await fetch(`${host}/areas?id__in=${id}`, {
      method: 'GET',
    });
    const data: AddressRes = await res.json();
    return data.results;
  } catch (e) {
    console.error(e);
  }
};

export async function deleteMeter(id: string) {
  try {
    await fetch(`${host}/meters${id}`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.error(e);
  }
}
