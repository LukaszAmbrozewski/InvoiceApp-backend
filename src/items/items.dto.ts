import { IsNumber, IsString, Max } from 'class-validator';

export class ItemsDto {
  @IsString()
  id: string;

  @IsString()
  invoiceId: string;

  @IsString()
  userId: string;

  @IsString()
  @Max(255)
  name: string;

  @IsNumber()
  @Max(6)
  quantity: number;

  @IsNumber()
  @Max(12)
  netValue: number;

  @IsNumber()
  @Max(14)
  totalNetValue: number;

  @IsNumber()
  @Max(6)
  taxRate: number;

  @IsNumber()
  @Max(12)
  taxValue: number;

  @IsNumber()
  @Max(14)
  totalGrossValue: number;
}
