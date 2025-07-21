import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { EventEntity } from './event.entity';
import { TicketStatus } from 'src/shared/ticket-status';

@Entity({ name: 'ticket' })
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  ticketNumber: number;

  //? Relation avec le user (acheteur)
  @ManyToOne(() => UserEntity, (user) => user.tickets)
  @JoinColumn({ name: 'user_id' })
  client: UserEntity;

  //? Relation avec l'event
  @ManyToOne(() => EventEntity, (event) => event.tickets)
  @JoinColumn({ name: 'event_id' })
  event: EventEntity;

  @Column()
  purchaseDate: Date;

  @Column({ default: TicketStatus.Valid })
  status: TicketStatus;
}
