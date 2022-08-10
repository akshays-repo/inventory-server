import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'fuckyournationalism',
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { userInfo } = payload;
    const user = this.usersService.findByEmail(userInfo.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
