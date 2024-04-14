import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import { UserService } from './user.service';
import {CreateUserDto} from "./dto/create-user.dto";

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

  @Get('/')
  find() {
    return 1;
  }
}
