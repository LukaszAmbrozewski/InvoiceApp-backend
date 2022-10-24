import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class History extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 36,
  })
  userId: string;

  @Column({
    type: 'date',
  })
  date: string;

  @Column({
    type: 'time',
  })
  time: string;

  @Column({
    length: 255,
  })
  action: string;

  @Column({
    length: 255,
  })
  fullDateAndTime: string;
}
