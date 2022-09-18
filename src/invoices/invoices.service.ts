import { Injectable } from '@nestjs/common';
import {
  Invoice,
  InvoiceRemoveResponse,
  InvoiceResponse,
} from '../interfaces/invoice';
import { User } from '../user/user.entity';
import { Invoices } from './invoices.entity';
import { invoiceNumber } from '../utils/invoice-number';
import { updateInvoiceObj } from '../utils/update-invoice-obj';
import { invoiceNotFound } from '../utils/invoice-not-found';
import { Items } from '../items/items.entity';
import { updateInvoiceSummary } from '../utils/update-invoice-summary';
import { addNewActionToHistory } from '../utils/add-new-action-to-history';
import { GetClientNameById } from '../utils/get-client-name-by-id';

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

    updateInvoiceObj(invoice, newInvoice);
    invoice.invoiceNumber = newInvoiceNumber;
    invoice.userId = user.id;

    await invoice.save();
    await addNewActionToHistory(
      user,
      `Dodano nową fakturę numer ${
        invoice.invoiceNumber
      } dla firmy ${await GetClientNameById(clientId)}.`,
    );

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

    console.log('*****************', invoice);

    if (!invoice) {
      invoiceNotFound();
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

    await addNewActionToHistory(
      user,
      `Edytowano fakturę ${
        invoice.invoiceNumber
      } dla firmy ${await GetClientNameById(patchedInvoice.clientId)}.`,
    );
    updateInvoiceObj(invoice, patchedInvoice);
    await invoice.save();
    await updateInvoiceSummary(user, invoice.id);

    return {
      isSuccess: true,
      id: invoice.id,
      clientId: invoice.clientId,
    };
  }

  async getAllInvoices(user: User): Promise<Invoices[]> {
    return await Invoices.find({
      where: {
        userId: user.id,
      },
    });
  }

  async getOneInvoice(user: User, id: string): Promise<Invoices> {
    const invoice = await Invoices.findOne({
      where: {
        userId: user.id,
        id: id,
      },
    });

    if (!invoice) {
      invoiceNotFound();
    }

    return invoice;
  }

  async removeOneInvoice(
    user: User,
    id: string,
  ): Promise<InvoiceRemoveResponse> {
    const invoice = await Invoices.findOne({
      where: {
        userId: user.id,
        id: id,
      },
    });

    if (!invoice) {
      invoiceNotFound();
    }

    await Items.delete({
      userId: user.id,
      invoiceId: invoice.id,
    });

    await updateInvoiceSummary(user, invoice.id);
    await invoice.remove();
    await addNewActionToHistory(
      user,
      `Usunięto fakturę ${
        invoice.invoiceNumber
      } dla firmy ${await GetClientNameById(invoice.clientId)}.`,
    );

    return {
      isSuccess: true,
      id,
    };
  }
}
