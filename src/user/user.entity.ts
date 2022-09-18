import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 255,
  })
  email: string;

  @Column()
  pwdHash: string;

  @Column({
    nullable: true,
    default: null,
  })
  currentTokenId: string | null;

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
    precision: 11,
    type: 'bigint',
  })
  nip: number;

  @Column({
    precision: 15,
    type: 'bigint',
  })
  regon: number;

  @Column({
    precision: 18,
    type: 'bigint',
  })
  phoneNumber: number;
}
