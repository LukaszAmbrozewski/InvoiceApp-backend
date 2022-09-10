import { Client } from '../interfaces/client';

export const updateClientObj = (client, newClientObj: Client) => {
  client.companyName = newClientObj.companyName;
  client.streetAddress = newClientObj.streetAddress;
  client.cityAndCode = newClientObj.cityAndCode;
  client.nip = newClientObj.nip;
  client.regon = newClientObj.regon;
  client.email = newClientObj.email;
  client.phoneNumber = newClientObj.phoneNumber;

  return client;
};
