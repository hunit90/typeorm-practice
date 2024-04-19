import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    loginEmail(
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        return this.authService.loginWithEmail({
            email, password,
        })
    }


    @Post('register')
    register(
        @Body('ncikname') nickname: string,
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        return this.authService.registerWithEmail({
            nickname, email, password
        })
    }
}
