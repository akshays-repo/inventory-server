import { Body, Controller, Post } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authsService.userAuth(createAuthDto);
  }
}
