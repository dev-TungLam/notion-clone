import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Share } from '../shares/share.entity';
import { CollectionRow } from './collection-rows/collection-row.entity';
import { CollectionProperty } from './collection-properties/collection-property.entity';
import { PageCollection } from '../pages/page-collections/page-collection.entity';

@Entity('collections')
export class Collection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { name: 'workspace_id', nullable: false })
  workspace_id: string;

  @Column('character varying', { name: 'title', nullable: true })
  title: string;

  @Column('character varying', { name: 'icon', nullable: true })
  icon: string;

  @Column('character varying', { name: 'cover', nullable: true })
  cover: string;

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

  @OneToMany(() => CollectionProperty, cp => cp.collection)
  collectionProperties: CollectionProperty[]

  @OneToMany(() => CollectionRow, cr => cr.collection)
  collectionRows: CollectionRow[]

  @OneToMany(() => Share, share => share.sharedCollection)
  collectionShares: Share[]

  @OneToMany(() => PageCollection, pc => pc.collection)
  collectionPages: PageCollection[]
}
