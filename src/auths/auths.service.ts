import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthsService {
  constructor(private jwtService: JwtService) {}

  async userAuth(createAuthDto: CreateAuthDto) {
    const payload: JwtPayload = { login: true };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }

  findAll() {
    return `This action returns all auths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
