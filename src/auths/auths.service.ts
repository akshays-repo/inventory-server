import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtPayload } from './jwt-payload.interface';
import { Auth, google } from 'googleapis';
import GoogleTokenDto from './dto/google-token.dto';
import { UsersService } from 'src/users/users.service';

// export interface Todo {
//   expiry_date: number;
//   scopes: string[];
//   azp: string;
//   aud: string;
//   sub: string;
//   exp: string;
//   email: string;
//   email_verified: string;
//   access_type: string;
// }

@Injectable()
export class AuthsService {
  private oauthClient: Auth.OAuth2Client;

  constructor(
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {
    const clientId =
      '331290056902-i949kh9as7vvpd7ahgh9rv43f6ok3pra.apps.googleusercontent.com';
    const clientSecret = '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';
    this.oauthClient = new google.auth.OAuth2(clientId, clientSecret);
  }

  async userAuth(token: GoogleTokenDto) {
    try {
      const tokenInfo = await this.oauthClient.getTokenInfo(token.token);
      const name = tokenInfo.email.split('@')[0];
      const email = tokenInfo.email.split('@')[1];
      if (email !== 'brainwired.in') {
        throw new Error('Invalid emailid');
      }
      let user = await this.usersService.findByEmail(email);
      if (!user) {
        user = await this.usersService.create({ name, email });
      }
      const payload: JwtPayload = { userInfo: user };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } catch (error) {
      throw error;
    }
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
