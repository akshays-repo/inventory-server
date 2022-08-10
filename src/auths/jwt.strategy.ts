import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'fuckyournationalism',
    });
  }

  async validate(payload: JwtPayload): Promise<boolean> {
    const { login } = payload;

    if (!login) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
