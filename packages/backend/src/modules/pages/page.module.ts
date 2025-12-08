import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './page.entity';

import { PagePermission } from './page-permission.entity';

import { PageCollection } from './page-collections/page-collection.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Page, PagePermission, PageCollection])],
    exports: [TypeOrmModule],
})
export class PageModule { }
