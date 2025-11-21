import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { User } from '../users/user.entity';
import { PagePermission } from './page-permission.entity';
import { PageCollection } from './page-collections/page-collection.entity';
import { Block } from '../blocks/block.entity';
import { Share } from '../shares/share.entity';

@Entity('pages')
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', { name: 'workspace_id', nullable: false })
  workspace_id: string;

  @Column('character varying', { name: 'parent_page_id', nullable: true })
  parent_page_id: string | null;

  @Column('character varying', { name: 'title', nullable: true })
  title: string;

  @Column('character varying', { name: 'created_by', nullable: false })
  created_by: string;

  @Column('character varying', { name: 'updated_by', nullable: true })
  updated_by: string | null;

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

  @ManyToOne(() => User, (user) => user.createdPages)
  @JoinColumn({ name: 'created_by' })
  createdBy: User;

  @OneToMany(() => PagePermission, (pm) => pm.page)
  pagePermissions: PagePermission[];

  @OneToMany(() => PageCollection, (pc) => pc.page)
  pageCollections: PageCollection[];

  @OneToMany(() => Block, (block) => block.page)
  blocks: Block[];

  @ManyToOne(() => Page, (page) => page.subPages)
  @JoinColumn({ name: 'parent_page_id' })
  parentPage: Page;

  @OneToMany(() => Page, (page) => page.parentPage)
  subPages: Page[];

  @OneToMany(() => Share, (share) => share.sharedPage)
  shares: Share[];
}
