import { UserRole } from 'src/shared/user-role.enum';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventEntity } from './event.entity';
import { TicketEntity } from './ticket.entity';
import { reviewEntity } from './review.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  password: string;

  @Column({ default: UserRole.Client })
  role: UserRole;

  @CreateDateColumn()
  subDate: Date;

  @OneToMany(() => EventEntity, (event) => event.organizer)
  events: EventEntity[];

  @OneToMany(() => TicketEntity, (ticket) => ticket.client)
  tickets: TicketEntity[];

  @OneToMany(() => reviewEntity, (comment) => comment.id)
  reviews: reviewEntity[];
}
