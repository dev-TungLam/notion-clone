import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CollectionRow } from './collection-row.entity';
import { CollectionProperty } from '../collection-properties/collection-property.entity';

@Entity('collection_row_values')
export class CollectionRowValue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { name: 'collection_row_id', nullable: false })
  collection_row_id: string;

  @Column('uuid', { name: 'collection_property_id', nullable: false })
  collection_property_id: string;

  @Column('jsonb', { name: 'value', nullable: true })
  value: any;

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

  @ManyToOne(() => CollectionRow, (row) => row.collectionRowValues)
  @JoinColumn({ name: 'collection_row_id' })
  collectionRow: CollectionRow;

  @ManyToOne(() => CollectionProperty)
  @JoinColumn({ name: 'collection_property_id' })
  collectionProperty: CollectionProperty;
}
