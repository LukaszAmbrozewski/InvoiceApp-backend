import { Item } from '../interfaces/items';

export const validationOneItemObj = (patchedItem: Item) => {
  const quantity = Number(patchedItem.quantity);
  const netValue = Number(patchedItem.netValue);
  const taxRate = Number(patchedItem.taxRate);

  return !(
    typeof patchedItem.invoiceId !== 'string' ||
    typeof patchedItem.name !== 'string' ||
    typeof quantity !== 'number' ||
    typeof netValue !== 'number' ||
    typeof taxRate !== 'number' ||
    patchedItem.invoiceId.length > 36 ||
    patchedItem.name.length > 255 ||
    quantity.toString().length > 6 ||
    netValue.toString().length > 12 ||
    taxRate.toString().length > 6
  );
};
