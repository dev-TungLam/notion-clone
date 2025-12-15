import { IsOptional, IsString } from "class-validator";

export class createWorkspaceDto {
    @IsString()
    @IsOptional()
    workspaceName?: string;
}