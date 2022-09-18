import { Item } from '../interfaces/items';

export const updateItemObj = (item, newItemObj: Item) => {
  const quantity = Number(newItemObj.quantity);
  const netValue = Number(newItemObj.netValue);
  const taxRate = Number(newItemObj.taxRate);
  const totalNetValue = newItemObj.netValue * newItemObj.quantity;
  const totalGrossValue = totalNetValue * ((taxRate + 100) / 100);
  item.invoiceId = newItemObj.invoiceId;
  item.name = newItemObj.name;
  item.quantity = quantity;
  item.netValue = netValue;
  item.totalNetValue = totalNetValue;
  item.taxRate = taxRate;
  item.taxValue = totalGrossValue - totalNetValue;
  item.totalGrossValue = totalGrossValue;
  return item;
};
