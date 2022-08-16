import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = await this.user.save(createUserDto);
      console.log({ user });
      return user;
    } catch (error) {
      throw new Error('Unable to create new user');
    }
  }

  findAll() {
    return this.user.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string) {
    try {
      const user = await this.user.findOneBy({ email });
      return user;
    } catch (error) {
      throw new Error('Unable to find user by given email');
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
