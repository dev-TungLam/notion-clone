import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './workspace.entity';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Injectable, BadRequestException } from '@nestjs/common';
import { WorkspaceMember } from '../workspace-members/workspace-member.entity';
import { LexoRank } from '../../utils/lexo-rank';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace)
    private workspaceRepository: Repository<Workspace>,
    @InjectRepository(WorkspaceMember)
    private workspaceMemberRepository: Repository<WorkspaceMember>,
  ) {}

  async createWorkspace(user: User, workspaceName?: string) {
    const workspace = this.workspaceRepository.create({
      workspace_name: workspaceName || `${user.user_name}'s Default Workspace`,
      owner_id: user.id,
      created_at: new Date(),
      updated_at: new Date(),
    });
    try {
      await this.workspaceRepository.save(workspace);

      // Create WorkspaceMember for the owner
      const member = this.workspaceMemberRepository.create({
        workspace_id: workspace.id,
        user_id: user.id,
        role: 'OWNER',
        // rank removed
        joined_at: new Date(),
      });
      await this.workspaceMemberRepository.save(member);
    } catch (error) {
      throw new BadRequestException('Failed to create workspace', error);
    }
    return {
      workspaceId: workspace.id,
      workspaceName: workspace.workspace_name,
      createdBy: user.id,
      createdAt: workspace.created_at,
    };
  }

  async getWorkspaces(user: User, pagingCursor?: any) {
    try {
      // Get workspaces from membership
      const members = await this.workspaceMemberRepository.find({
        where: {
          user_id: user.id,
        },
        relations: ['workspace'],
      });

      // Return workspace details
      return members.map((member) => ({
        ...member.workspace,
        role: member.role,
        joined_at: member.joined_at,
      }));
    } catch (error) {
      throw new BadRequestException('Failed to get workspaces', error);
    }
  }
}
