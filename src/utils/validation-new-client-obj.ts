import { Client } from '../interfaces/client';

export const validationNewClientObj = (newClientObj: Client) => {
  return !(
    typeof newClientObj.companyName !== 'string' ||
    typeof newClientObj.streetAddress !== 'string' ||
    typeof newClientObj.cityAndCode !== 'string' ||
    typeof Number(newClientObj.nip) !== 'number' ||
    typeof Number(newClientObj.regon) !== 'number' ||
    typeof newClientObj.email !== 'string' ||
    typeof Number(newClientObj.phoneNumber) !== 'number' ||
    newClientObj.companyName.length > 255 ||
    newClientObj.streetAddress.length > 255 ||
    newClientObj.cityAndCode.length > 255 ||
    newClientObj.nip.toString().length > 10 ||
    newClientObj.regon.toString().length > 14 ||
    newClientObj.email.length > 255 ||
    newClientObj.phoneNumber.toString().length > 18
  );
};
