import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Page } from '../page.entity';
import { Collection } from '../../collections/collection.entity';

@Entity('page_collections')
export class PageCollection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { name: 'page_id', nullable: false })
  page_id: string;

  @Column('uuid', { name: 'collection_id', nullable: false })
  collection_id: string;

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

  @ManyToOne(() => Page, (page) => page.pageCollections)
  @JoinColumn({ name: 'page_id' })
  page: Page;

  @ManyToOne(() => Collection, (collection) => collection.collectionPages)
  @JoinColumn({ name: 'collection_id' })
  collection: Collection;
}
