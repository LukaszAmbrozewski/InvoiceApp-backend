import { IsNumber, IsString, Max, Min } from 'class-validator';

export class ClientDto {
  @IsString()
  id: string;

  @IsString()
  userId: string;

  @IsString()
  @Max(255)
  companyName: string;

  @IsString()
  @Max(80)
  streetAddress: string;

  @IsString()
  @Max(50)
  cityAndCode: string;

  @IsNumber()
  @Min(10)
  @Max(10)
  nip: number;

  @IsNumber()
  @Min(9)
  @Max(14)
  regon: number;

  @IsString()
  @Max(255)
  email: string;

  @IsNumber()
  @Max(22)
  phoneNumber: number;
}
