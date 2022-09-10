import {
  Body,
  Controller,
  Inject,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { AuthGuard } from '@nestjs/passport';
import { InvoiceResponse } from '../interfaces/invoice';
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
}
