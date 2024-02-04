import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  currency: string = 'USD';

  @Column()
  amount: number = 0;

  @Column()
  description: string = '';

  @Column({ default: true })
  isActive: boolean = true;
}
