import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Page } from '../pages/page.entity';

@Entity('blocks')
export class Block {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { name: 'page_id', nullable: false })
  page_id: string;

  @Column('uuid', { name: 'parent_block_id', nullable: true })
  parent_block_id: string | null;

  @Column('character varying', { name: 'type', nullable: false })
  type: string;

  @Column('jsonb', { name: 'content', nullable: true })
  content: any;

  @Column('float', { name: 'position', nullable: false, default: 0 })
  position: number;

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

  @ManyToOne(() => Page, (page) => page.blocks)
  @JoinColumn({ name: 'page_id' })
  page: Page;

  @ManyToOne(() => Block, (block) => block.children)
  @JoinColumn({ name: 'parent_block_id' })
  parent: Block;

  @OneToMany(() => Block, (block) => block.parent)
  children: Block[];
}
