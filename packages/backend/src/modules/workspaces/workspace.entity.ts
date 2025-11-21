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
import { WorkspaceMember } from '../workspace-members/workspace-member.entity';
import { Share } from '../shares/share.entity';

@Entity(`workspaces`)
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', {
    name: 'workspace_name',
    nullable: false,
    length: 50,
  })
  workspace_name: string;

  @Column('character varying', { name: 'owner_id', nullable: false })
  owner_id: string;

  @Column('timestamptz', {
    name: 'created_at',
    nullable: false,
    default: () => 'now()',
  })
  created_at: Date;

  @Column('timestamptz', {
    name: 'created_at',
    nullable: false,
    default: () => 'now()',
  })
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.workspaces)
  @JoinColumn({ name: 'owner_id' })
  workspaceOwner: User;

  @OneToMany(() => WorkspaceMember, (wm) => wm.workspace)
  workspaceMembers: WorkspaceMember[];

  @OneToMany(() => Share, (share) => share.sharedWorkspace)
  shares: Share[];
}
