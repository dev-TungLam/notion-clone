import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './page.entity';

import { PagePermission } from './page-permission.entity';

import { PageCollection } from './page-collections/page-collection.entity';

import { PageService } from './page.service';
import { PageController } from './page.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Page, PagePermission, PageCollection])],
  controllers: [PageController],
  providers: [PageService],
  exports: [TypeOrmModule, PageService],
})
export class PageModule {}
