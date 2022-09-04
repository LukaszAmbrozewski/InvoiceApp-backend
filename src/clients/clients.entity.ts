import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clients extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 36,
  })
  userId: string;

  @Column({
    length: 255,
  })
  companyName: string;

  @Column({
    length: 80,
  })
  streetAddress: string;

  @Column({
    length: 50,
  })
  cityAndCode: string;

  @Column({
    precision: 10,
  })
  nip: number;

  @Column({
    precision: 14,
  })
  regon: number;

  @Column({
    length: 255,
  })
  email: string;

  @Column({
    precision: 22,
  })
  phoneNumber: number;
}
