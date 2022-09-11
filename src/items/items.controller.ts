import {
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { AuthGuard } from '@nestjs/passport';
import { Item, ItemResponse } from '../interfaces/items';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';

@Controller('items')
export class ItemsController {
  constructor(@Inject(ItemsService) private itemsService: ItemsService) {}

  @Get('/:invoiceId')
  @UseGuards(AuthGuard('jwt'))
  getAllItemsForInvoice(
    @UserObj() user: User,
    @Param('invoiceId') invoiceId: string,
  ): Promise<Item[]> {
    return this.itemsService.getAllItemsForInvoice(user, invoiceId);
  }

  @Get('/one/:itemId')
  @UseGuards(AuthGuard('jwt'))
  getOneItemForInvoice(
    @UserObj() user: User,
    @Param('itemId') itemId: string,
  ): Promise<Item> {
    return this.itemsService.getOneItemForInvoice(user, itemId);
  }

  @Delete('/:itemId')
  @UseGuards(AuthGuard('jwt'))
  removeOneItem(
    @UserObj() user: User,
    @Param('itemId') itemId: string,
  ): Promise<ItemResponse> {
    return this.itemsService.removeOneItem(user, itemId);
  }
}
