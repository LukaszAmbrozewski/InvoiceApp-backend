import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Invoice, InvoiceResponse } from '../interfaces/invoice';
import { User } from '../user/user.entity';
import { Invoices } from './invoices.entity';
import { invoiceNumber } from '../utils/invoice-number';
import { updateInvoiceObj } from '../utils/update-invoice-obj';

@Injectable()
export class InvoicesService {
  async addInvoice(newInvoice: Invoice, user: User): Promise<InvoiceResponse> {
    const {
      clientId,
      creationDate,
      dateOfService,
      place,
      personCreatingInvoice,
    } = newInvoice;

    if (
      typeof clientId !== 'string' ||
      typeof creationDate !== 'string' ||
      typeof dateOfService !== 'string' ||
      typeof place !== 'string' ||
      typeof personCreatingInvoice !== 'string' ||
      clientId.length > 36 ||
      place.length > 40 ||
      personCreatingInvoice.length > 120
    ) {
      return {
        isSuccess: false,
      };
    }

    const newInvoiceNumber = await invoiceNumber(user.id);

    const invoice = new Invoices();

    invoice.invoiceNumber = newInvoiceNumber;
    invoice.userId = user.id;
    invoice.clientId = clientId;
    invoice.creationDate = creationDate;
    invoice.dateOfService = dateOfService;
    invoice.place = place;
    invoice.personCreatingInvoice = personCreatingInvoice;

    await invoice.save();

    return {
      isSuccess: true,
      id: invoice.id,
      clientId: invoice.clientId,
    };
  }

  async patchInvoice(
    patchedInvoice: Invoice,
    user: User,
  ): Promise<InvoiceResponse> {
    const { id, methodOfPayment, dueDate, accountNumber } = patchedInvoice;

    const invoice = await Invoices.findOne({
      where: {
        userId: user.id,
        id: patchedInvoice.id,
      },
    });

    if (!invoice) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Invoice not found!',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    if (
      typeof id !== 'string' ||
      typeof methodOfPayment !== 'string' ||
      typeof dueDate !== 'string' ||
      typeof accountNumber !== 'string' ||
      id.length > 36 ||
      methodOfPayment.length > 30 ||
      accountNumber.length > 150
    ) {
      return {
        isSuccess: false,
      };
    }

    updateInvoiceObj(invoice, patchedInvoice);

    await invoice.save();

    return {
      isSuccess: true,
      id: invoice.id,
      clientId: invoice.clientId,
    };
  }
}