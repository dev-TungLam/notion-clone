import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Share } from './share.entity';

import { SharePermission } from './share-permission.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Share, SharePermission])],
    exports: [TypeOrmModule],
})
export class ShareModule { }
