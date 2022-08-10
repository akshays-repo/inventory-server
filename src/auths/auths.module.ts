import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'fuckyournationalism',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [AuthsController],
  providers: [AuthsService],
})
export class AuthsModule {}
