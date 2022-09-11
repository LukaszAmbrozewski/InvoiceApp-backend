import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { Item, ItemResponse } from '../interfaces/items';
import { Items } from './items.entity';

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
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Item not found!',
        },
        HttpStatus.NOT_FOUND,
      );
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
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Item not found!',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await item.remove();

    return {
      isSuccess: true,
      id: item.id,
      invoiceId: item.invoiceId,
    };
  }
}
