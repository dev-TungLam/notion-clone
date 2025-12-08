import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, userName } = createUserDto;

    const existingUser = await this.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
    const passwordHash = await bcrypt.hash(password, 10);
    

    const newUser = this.usersRepository.create({
      email,
      password_hash: passwordHash,
      user_name: userName
    });

    return this.usersRepository.save(newUser);
  }
}