import { Items } from '../items/items.entity';
import { User } from '../user/user.entity';
import { Invoices } from '../invoices/invoices.entity';

export const updateInvoiceSummary = async (user: User, invoiceId: string) => {
  const items = await Items.find({
    where: {
      userId: user.id,
      invoiceId: invoiceId,
    },
  });

  let totalNetValue = 0;
  for (const key in items) {
    const el = items[key];
    totalNetValue = totalNetValue + el.totalNetValue;
  }

  let totalTaxValue = 0;
  for (const key in items) {
    const el = items[key];
    totalTaxValue = totalTaxValue + el.taxValue;
  }

  let totalGrossValue = 0;
  for (const key in items) {
    const el = items[key];
    totalGrossValue = totalGrossValue + el.totalGrossValue;
  }

  const invoice = await Invoices.findOne({
    where: {
      userId: user.id,
      id: invoiceId,
    },
  });

  invoice.netValueOfTheEntireInvoice = totalNetValue;
  invoice.tax = totalTaxValue;
  invoice.grossValueOfEntireInvoice = totalGrossValue;

  await invoice.save();
};
