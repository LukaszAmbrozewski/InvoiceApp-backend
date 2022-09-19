import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { Item, ItemResponse } from '../interfaces/items';
import { Items } from './items.entity';
import { updateItemObj } from '../utils/update-item-obj';
import { itemNotFound } from '../utils/item-not-found';
import { validationOneItemObj } from '../utils/validation-one-item-obj';
import { checkInvoiceUser } from '../utils/check-invoice-user';
import { itemValueAreIncorrect } from '../utils/item-value-are-incorrect';
import { updateInvoiceSummary } from '../utils/update-invoice-summary';
import { addNewActionToHistory } from '../utils/add-new-action-to-history';
import { GetInvoiceNameById } from '../utils/get-invoice-name-by-id';

@Injectable()
export class ItemsService {
  async getAllItemsForInvoice(user: User, invoiceId: string): Promise<Item[]> {
    return await Items.find({
      where: {
        userId: user.id,
        invoiceId: invoiceId,
      },
    });
  }

  async getOneItemForInvoice(user: User, itemId: string): Promise<Item> {
    const item = await Items.findOne({
      where: {
        userId: user.id,
        id: itemId,
      },
    });

    if (!item) {
      itemNotFound();
    }

    return item;
  }

  async removeOneItem(user: User, itemId: string): Promise<ItemResponse> {
    const item = await Items.findOne({
      where: {
        id: itemId,
        userId: user.id,
      },
    });

    if (!item) {
      itemNotFound();
    }

    await addNewActionToHistory(
      user,
      `Usunięto jedną pozycję z faktury ${await GetInvoiceNameById(
        item.invoiceId,
      )}.`,
    );
    await item.remove();
    await updateInvoiceSummary(user, item.invoiceId);

    return {
      isSuccess: true,
      id: item.id,
      invoiceId: item.invoiceId,
    };
  }

  async patchOneItem(user: User, patchedItem: Item): Promise<ItemResponse> {
    const item = await Items.findOne({
      where: {
        userId: user.id,
        id: patchedItem.id,
      },
    });

    await checkInvoiceUser(user, patchedItem);

    if (!item) {
      itemNotFound();
    }

    if (!validationOneItemObj(patchedItem)) {
      itemValueAreIncorrect();
    }

    updateItemObj(item, patchedItem);

    await addNewActionToHistory(
      user,
      `Edytowano jedną pozycję z faktury ${await GetInvoiceNameById(
        item.invoiceId,
      )}.`,
    );
    await item.save();
    await updateInvoiceSummary(user, patchedItem.invoiceId);

    return {
      isSuccess: true,
      id: patchedItem.id,
      invoiceId: patchedItem.invoiceId,
    };
  }

  async addOneItem(user: User, newItem: Item): Promise<ItemResponse> {
    await checkInvoiceUser(user, newItem);

    if (!validationOneItemObj(newItem)) {
      itemValueAreIncorrect();
    }

    const item = new Items();

    updateItemObj(item, newItem);
    item.userId = user.id;

    await item.save();
    await updateInvoiceSummary(user, item.invoiceId);

    await addNewActionToHistory(
      user,
      `Dodano jedną pozycję do faktury ${await GetInvoiceNameById(
        item.invoiceId,
      )}.`,
    );

    return {
      isSuccess: true,
      id: newItem.id,
      invoiceId: newItem.invoiceId,
    };
  }
}
