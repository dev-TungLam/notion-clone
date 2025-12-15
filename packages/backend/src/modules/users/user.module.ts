import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { WorkspaceModule } from '../workspaces/workspace.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => WorkspaceModule)
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
