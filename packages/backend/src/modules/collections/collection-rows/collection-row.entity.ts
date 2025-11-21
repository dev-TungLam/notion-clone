import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Collection } from '../collection.entity';
import { CollectionRowValue } from './collection-row-value.entity';

@Entity('collection_rows')
export class CollectionRow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @ManyToOne(() => Collection, (collection) => collection.collectionRows)
  @JoinColumn({ name: 'collection_id' })
  collection: Collection;

  @OneToMany(() => CollectionRowValue, (val) => val.collectionRow)
  collectionRowValues: CollectionRowValue[];
}
