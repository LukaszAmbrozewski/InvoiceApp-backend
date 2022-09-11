import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { AuthGuard } from '@nestjs/passport';
import { Item } from '../interfaces/items';
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
}
