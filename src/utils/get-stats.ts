import { Between } from 'typeorm';
import { getMonthName } from './get-month-name';
import { MonthStats } from '../interfaces/stats';
import { User } from '../user/user.entity';
import { Invoices } from '../invoices/invoices.entity';

export const stats = async (
  user: User,
  startingDate: string,
  endingDate: string,
): Promise<MonthStats[]> => {
  let yearStart = new Date(startingDate).getFullYear();
  let monthStart = new Date(startingDate).getMonth();
  const yearEnd = new Date(endingDate).getFullYear();
  const monthEnd = new Date(endingDate).getMonth();
  let month = 12;

  const statsRes = [];

  while (yearStart <= yearEnd) {
    if (yearStart === yearEnd) {
      month = monthEnd;
    }
    while (monthStart <= month) {
      console.log(monthStart);
      monthStart++;
      const invoices = await Invoices.find({
        where: {
          userId: user.id,
          creationDate: Between(
            `${yearStart}.${monthStart}.01`,
            `${yearStart}.${monthStart}.31`,
          ),
        },
      });

      let totalInvoicesValue = 0;
      for (const key in invoices) {
        const el = invoices[key];
        totalInvoicesValue = totalInvoicesValue + el.grossValueOfEntireInvoice;
      }

      const invoicesCount = invoices.length;
      const averageInvoiceValue = totalInvoicesValue
        ? (totalInvoicesValue / invoicesCount).toFixed(2)
        : 0;
      const monthName = getMonthName(monthStart);

      statsRes.push({
        year: yearStart,
        monthName,
        totalInvoicesValue,
        invoicesCount,
        averageInvoiceValue,
      });
    }
    yearStart++;
    monthStart = 1;
  }

  return statsRes;
};
