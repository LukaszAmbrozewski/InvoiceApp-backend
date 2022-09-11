import { IsNumber, IsString, Max } from 'class-validator';

export class InvoiceDto {
  @IsString()
  id: string;

  @IsString()
  userId: string;

  @IsString()
  clientId: string;

  @IsString()
  @Max(30)
  invoiceNumber: string;

  @IsString()
  creationDate: string;

  @IsString()
  dateOfService: string;

  @IsString()
  @Max(40)
  place: string;

  @IsNumber()
  netValueOfTheEntireInvoice: number;

  @IsNumber()
  tax: number;

  @IsNumber()
  grossValueOfEntireInvoice: number;

  @IsString()
  @Max(120)
  personCreatingInvoice: string;

  @IsString()
  @Max(30)
  methodOfPayment: string;

  @IsString()
  dueDate: string;

  @IsString()
  @Max(50)
  accountNumber: string;
}