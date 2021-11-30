import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { AuthMiddleware } from '../../common/guards/auth.middleware';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RegisterDto } from '../user/dto/register.dto';
import { LoginDto } from '../user/dto/login.dto';

import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/login')
  async login(@Body() data: LoginDto) {
    const user = await this.userService.findOneByEmail(data.email);

    if (!user) {
      throw new Error('User with this email not found.');
    }

    await this.authService.validate({
      password: data.password,
      hashPassword: user.password,
    });

    return this.authService.login(user);
  }

  @Post('/register')
  async register(@Body() data: RegisterDto) {
    const userExists = await this.userService.findOneByEmail(data.email);

    if (userExists) {
      throw new Error('User is already exists.');
    }

    const user = await this.userService.save({
      email: data.email,
      password: data.password,
      name: data.name,
    });

    return this.authService.login(user);
  }

  @UseGuards(AuthMiddleware)
  @ApiBearerAuth()
  @Post('/me')
  me(@Req() req: Request & { userId: number }) {
    return this.userService.findOneById(req.userId);
  }
}