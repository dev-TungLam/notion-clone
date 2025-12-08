import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionRow } from './collection-row.entity';

import { CollectionRowValue } from './collection-row-value.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CollectionRow, CollectionRowValue])],
    exports: [TypeOrmModule],
})
export class CollectionRowModule { }
