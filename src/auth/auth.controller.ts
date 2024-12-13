import {
  AuthGuard,
  CreateUserDto,
  LoginDto,
  SignInResource,
  User,
  UserDocument,
} from '@lib/my-films-lib';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() loginDto: LoginDto): Promise<SignInResource> {
    return this.authService.signIn(loginDto);
  }

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.authService.signUp(createUserDto);
    return user;
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
