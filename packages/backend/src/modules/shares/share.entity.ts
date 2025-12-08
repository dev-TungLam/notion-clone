import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { User } from '../users/user.entity';
import { SharePermission } from './share-permission.entity';
import { Collection } from '../collections/collection.entity';
import { Page } from '../pages/page.entity';
import { Workspace } from '../workspaces/workspace.entity';

@Entity(`shares`)
export class Share {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', { name: 'resource_id', nullable: false })
  resource_id: string;

  @Column('character varying', { name: 'resource_type', nullable: false })
  resource_type: string;

  @Column('uuid', { name: 'share_with_user_id', nullable: false })
  share_with_user_id: string;

  @Column('uuid', { name: 'share_by_user_id', nullable: false })
  share_by_user_id: string;

  @Column('timestamptz', {
    name: 'created_at',
    nullable: false,
    default: () => 'now()',
  })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.userSharesGiven)
  @JoinColumn({ name: 'share_by_user_id' })
  shareByUser: User;

  @ManyToOne(() => User, (user) => user.userSharesReceived)
  @JoinColumn({ name: 'share_with_user_id' })
  shareWithUser: User;

  @OneToMany(() => SharePermission, sp => sp.share)
  sharePermissions: SharePermission[]

  @ManyToOne(() => Collection, collection => collection.collectionShares, { createForeignKeyConstraints: false })
  @JoinColumn({ name: 'resource_id' })
  sharedCollection: Collection

  @ManyToOne(() => Page, page => page.shares, { createForeignKeyConstraints: false })
  @JoinColumn({ name: 'resource_id' })
  sharedPage: Page

  @ManyToOne(() => Workspace, workspace => workspace.shares, { createForeignKeyConstraints: false })
  @JoinColumn({ name: 'resource_id' })
  sharedWorkspace: Workspace
}
