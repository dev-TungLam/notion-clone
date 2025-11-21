import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Collection } from '../collection.entity';

@Entity('collection_properties')
export class CollectionProperty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { name: 'collection_id', nullable: false })
  collection_id: string;

  @Column('character varying', { name: 'name', nullable: false })
  name: string;

  @Column('character varying', { name: 'type', nullable: false })
  type: string;

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

  @ManyToOne(() => Collection, (collection) => collection.collectionProperties)
  @JoinColumn({ name: 'collection_id' })
  collection: Collection;
}
