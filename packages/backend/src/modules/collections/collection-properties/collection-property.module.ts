import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionProperty } from './collection-property.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CollectionProperty])],
    exports: [TypeOrmModule],
})
export class CollectionPropertyModule { }
