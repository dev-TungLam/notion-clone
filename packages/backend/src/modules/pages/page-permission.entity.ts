import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Page } from './page.entity';

@Entity(`page_permission`)
export class PagePermission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', { name: 'page_id', nullable: false })
  page_id: string;

  @Column('character varying', { name: 'user_id', nullable: false })
  user_id: string;

  @Column('timestamptz', {
    name: 'created_at',
    nullable: false,
    default: () => 'now()',
  })
  created_at: Date;

  @Column('timestamptz', {
    name: 'updated_at',
    nullable: true,
    default: () => 'now()',
  })
  updated_at: Date | null;

  @ManyToOne(() => User, (user) => user.userPagePermissions)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Page, (page) => page.pagePermissions)
  @JoinColumn({ name: 'page_id' })
  page: Page;
}
