import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { TicketEntity } from './ticket.entity';
import { reviewEntity } from './review.entity';

@Entity({ name: 'event' })
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column()
  dateTime: Date;

  @Column()
  vacancies: number;

  @Column()
  ticketPrice: number;

  //? FK vers User (organizer)
  @ManyToOne(() => UserEntity, (user) => user.events)
  @JoinColumn({ name: 'organizer_id' })
  organizer: UserEntity;

  //? FK vers Ticket
  @OneToMany(() => TicketEntity, (ticket) => ticket.event)
  tickets: TicketEntity[];

  @OneToMany(() => reviewEntity, (review) => review.event)
  reviews: EventEntity[];
}
