import { ReviewRating } from 'src/shared/review-rating';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { EventEntity } from './event.entity';

@Entity({ name: 'review' })
export class reviewEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  rating: ReviewRating;

  @Column({ type: 'text', nullable: true })
  comment: string | null;

  @ManyToOne(() => UserEntity, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => EventEntity, (event) => event.reviews)
  @JoinColumn({ name: 'event_id' })
  event: EventEntity;

  @CreateDateColumn()
  publishingDate: Date;
}
