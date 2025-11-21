import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Share } from './share.entity';

@Entity(`share_permissions`)
export class SharePermission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { name: 'share_id', nullable: false })
  share_id: string;

  @Column('character varying', { name: 'permission', nullable: false })
  permission: string;

  @ManyToOne(() => Share, (share) => share.sharePermissions)
  @JoinColumn({name: 'share_id'})
  share: Share
}
