import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Workspace } from '../workspaces/workspace.entity';
import { WorkspaceMember } from '../workspace-members/workspace-member.entity';
import { Page } from '../pages/page.entity';
import { PagePermission } from '../pages/page-permission.entity';
import { Share } from '../shares/share.entity';

@Entity(`users`)
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', {
    name: 'email',
    nullable: false,
    length: 255,
    unique: true,
  })
  email: string;

  @Column('character varying', {
    name: 'password_hash',
    nullable: false,
    length: 255,
  })
  password_hash: string;

  @Column('character varying', {
    name: 'user_name',
    nullable: false,
    length: 50,
    unique: true,
  })
  user_name: string;

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

  @OneToMany(() => Workspace, (ws) => ws.workspaceOwner)
  workspaces: Workspace[];

  @OneToMany(() => WorkspaceMember, (wm) => wm.user_id)
  workspaceMemberships: WorkspaceMember[];

  @OneToMany(() => Page, (page) => page.created_by)
  createdPages: Page[];

  @OneToMany(() => PagePermission, (pm) => pm.user_id)
  userPagePermissions: PagePermission[];

  @OneToMany(() => Share, (share) => share.shareByUser)
  userSharesGiven: Share[];

  @OneToMany(() => Share, (share) => share.shareWithUser)
  userSharesReceived: Share[];
}
