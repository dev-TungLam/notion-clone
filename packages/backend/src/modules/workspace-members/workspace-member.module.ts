import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspaceMember } from './workspace-member.entity';

@Module({
    imports: [TypeOrmModule.forFeature([WorkspaceMember])],
    exports: [TypeOrmModule],
})
export class WorkspaceMemberModule { }
