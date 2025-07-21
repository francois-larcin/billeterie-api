import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'venue' })
export class VenueEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200 })
  name: string;

  @Column()
  address: string;

  @Column()
  maxCapacity: number;

  @Column({ type: 'text', nullable: true })
  description: string | null;
}
