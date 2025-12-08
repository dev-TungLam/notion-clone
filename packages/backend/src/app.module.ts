import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { WorkspaceModule } from './modules/workspaces/workspace.module';
import { WorkspaceMemberModule } from './modules/workspace-members/workspace-member.module';
import { PageModule } from './modules/pages/page.module';
import { ShareModule } from './modules/shares/share.module';
import { BlockModule } from './modules/blocks/block.module';
import { CollectionModule } from './modules/collections/collection.module';
import { CollectionPropertyModule } from './modules/collections/collection-properties/collection-property.module';
import { CollectionRowModule } from './modules/collections/collection-rows/collection-row.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', 'packages/backend/.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', configService.get<string>('POSTGRES_USER', 'postgres')),
        password: configService.get<string>('DB_PASSWORD', configService.get<string>('POSTGRES_PASSWORD', 'postgres')),
        database: configService.get<string>('DB_NAME', configService.get<string>('POSTGRES_DB', 'notion_clone')),
        autoLoadEntities: true,
        synchronize: true, // Don't use this in production
      }),
    }),
    UserModule,
    AuthModule,
    WorkspaceModule,
    WorkspaceMemberModule,
    PageModule,
    ShareModule,
    BlockModule,
    CollectionModule,
    CollectionPropertyModule,
    CollectionRowModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
