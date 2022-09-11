import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { AuthGuard } from '@nestjs/passport';
import { Invoice, InvoiceResponse } from '../interfaces/invoice';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';
import { InvoiceDto } from './dto/invoices.dto';

@Controller('invoices')
export class InvoicesController {
  constructor(
    @Inject(InvoicesService) private invoicesService: InvoicesService,
  ) {}

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  addInvoice(
    @Body() newInvoice: InvoiceDto,
    @UserObj() user: User,
  ): Promise<InvoiceResponse> {
    return this.invoicesService.addInvoice(newInvoice, user);
  }

  @Patch('/')
  @UseGuards(AuthGuard('jwt'))
  pachInvoice(
    @Body() patchedInvoice: InvoiceDto,
    @UserObj() user: User,
  ): Promise<InvoiceResponse> {
    return this.invoicesService.patchInvoice(patchedInvoice, user);
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getAllInvoices(@UserObj() user: User): Promise<Invoice[]> {
    return this.invoicesService.getAllInvoices(user);
  }
}
