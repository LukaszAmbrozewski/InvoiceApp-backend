import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Invoices extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 36,
  })
  userId: string;

  @Column({
    length: 36,
  })
  clientId: string;

  @Column({
    length: 30,
  })
  invoiceNumber: string;

  @Column({
    type: 'date',
  })
  creationDate: string;

  @Column({
    type: 'date',
  })
  dateOfService: string;

  @Column({
    length: 40,
  })
  place: string;

  @Column({
    precision: 11,
    scale: 2,
    type: 'decimal',
  })
  netValueOfTheEntireInvoice: number;

  @Column({
    precision: 11,
    scale: 2,
    type: 'decimal',
  })
  tax: number;

  @Column({
    precision: 11,
    scale: 2,
    type: 'decimal',
  })
  grossValueOfEntireInvoice: number;

  @Column({
    length: 120,
  })
  personCreatingInvoice: string;

  @Column({
    length: 30,
  })
  methodOfPayment: string;

  @Column({
    type: 'date',
  })
  dueDate: string;

  @Column({
    length: 50,
  })
  accountNumber: string;
}
