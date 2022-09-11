import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { Item, ItemResponse } from '../interfaces/items';
import { Items } from './items.entity';
import { updateItemObj } from '../utils/update-item-obj';
import { itemNotFound } from '../utils/item-not-found';
import { validationPatchOneItemObj } from '../utils/validation-patch-one-item-obj';

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

    await item.remove();

    return {
      isSuccess: true,
      id: item.id,
      invoiceId: item.invoiceId,
    };
  }

  async patchOneItem(user: User, patchedItem: Item): Promise<ItemResponse> {
    const { userId } = patchedItem;

    const item = await Items.findOne({
      where: {
        userId: userId,
        id: patchedItem.id,
      },
    });

    if (!item) {
      itemNotFound();
    }

    if (!validationPatchOneItemObj(patchedItem)) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Item values are incorrect!',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    updateItemObj(item, patchedItem);

    await item.save();

    return {
      isSuccess: true,
      id: patchedItem.id,
      invoiceId: patchedItem.invoiceId,
    };
  }
}
