import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { WorkspaceService } from '../workspaces/workspace.service';

@Injectable()
export class UserService {
  private static readonly SALT_ROUNDS = 10;

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private workspaceService: WorkspaceService,
  ) {}

  async findById(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, userName } = createUserDto;

    const existingUser = await this.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
    const passwordHash = await bcrypt.hash(password, UserService.SALT_ROUNDS);

    const newUser = this.usersRepository.create({
      email,
      password_hash: passwordHash,
      user_name: userName,
    });

    const registeredUser = await this.usersRepository.save(newUser);

    if (!registeredUser) {
      throw new BadRequestException('User registration failed');
    }

    // Coupling: New User -> New Default Workspace (1:1 strict)
    await this.workspaceService.createWorkspace(registeredUser);

    return registeredUser;
  }
}
