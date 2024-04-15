import {Body, Controller, Get, Post, Req, UnauthorizedException} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtUserDto} from "../auth/dto/jwt-user.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async create(
      @Req() req: Request,
      @Body() createUserDto: CreateUserDto,
  ) {
    return this.userService.create(createUserDto);
  }

  @Get('me')
  async findMe(@Req() req: Request) {
    const user = req.user as JwtUserDto;

    if(!user) {
      throw new UnauthorizedException();
    }

    return this.userService.findById(user.id);
  }
}
