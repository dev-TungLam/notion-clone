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
import { Workspace } from '../workspaces/workspace.entity';

@Entity(`workspace_members`)
export class WorkspaceMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', {
    name: 'workspace_id',
    nullable: false,
    unique: true,
  })
  workspace_id: string;

  @Column('character varying', {
    name: 'user_id',
    nullable: false,
    unique: true,
  })
  user_id: string;

  @Column('character varying', {
    name: 'role',
    nullable: false,
    default: 'MEMBER',
  })
  role: string;

  @Column('timestamptz', {
    name: 'updated_at',
    nullable: true,
    default: () => 'now()',
  })
  joined_at: Date;

  @ManyToOne(() => User, (user) => user.workspaceMemberships)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Workspace, (wp) => wp.workspaceMembers)
  @JoinColumn({ name: 'workspace_id' })
  workspace: Workspace;
}
