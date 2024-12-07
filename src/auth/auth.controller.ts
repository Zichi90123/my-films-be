import { AuthGuard } from '@lib/my-films-lib/auth';
import { CreateUserDto, LoginDto } from '@lib/my-films-lib/dtos';
import { SignInResource } from '@lib/my-films-lib/resources';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@lib/my-films-lib/schemas';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() loginDto: LoginDto): Promise<SignInResource> {
    return this.authService.signIn(loginDto);
  }

  @Post('signup')
  signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.signUp(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
