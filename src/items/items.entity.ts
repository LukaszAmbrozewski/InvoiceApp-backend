import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 36,
  })
  invoiceId: string;

  @Column({
    length: 255,
  })
  name: string;

  @Column({
    precision: 6,
    scale: 1,
    type: 'decimal',
  })
  quantity: number;

  @Column({
    precision: 12,
    scale: 2,
    type: 'decimal',
  })
  netValue: number;

  @Column({
    precision: 14,
    scale: 2,
    type: 'decimal',
  })
  totalNetValue: number;

  @Column({
    precision: 6,
    scale: 2,
    type: 'decimal',
  })
  taxRate: number;

  @Column({
    precision: 12,
    scale: 2,
    type: 'decimal',
  })
  taxValue: number;

  @Column({
    precision: 14,
    scale: 2,
    type: 'decimal',
  })
  totalGrossValue: number;
}
