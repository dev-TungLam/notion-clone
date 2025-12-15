import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { Response } from '../../utils/response';
import { WorkspaceService } from './workspace.service';
import { UserService } from '../users/user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { createWorkspaceDto } from './dto/create-workspace.dto';
import { PagingCursor } from 'src/utils/paging-cursor';

@Controller('workspaces')
@UseGuards(JwtAuthGuard)
export class WorkspaceController {
  constructor(
    private readonly workspaceService: WorkspaceService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async createWorkspace(@Body() body: createWorkspaceDto, @Req() req: any) {
    const userId = req.user.userId;
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const result = await this.workspaceService.createWorkspace(
      user,
      body.workspaceName,
    );

    return new Response(
      HttpStatus.OK,
      'Workspace created successfully',
      result,
    );
  }

  @Get('list')
  async getWorkspaces(
    @Req() req: any,
    @Query('cursor') cursor?: string,
    @Query('limit') limit?: number,
  ) {
    const userId = req.user.userId;

    const pagingCursor = new PagingCursor(cursor, limit);
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const workspaces = await this.workspaceService.getWorkspaces(
      user,
      pagingCursor,
    );
    return new Response(
      HttpStatus.OK,
      'Workspaces retrieved successfully',
      workspaces,
    );
  }
}
