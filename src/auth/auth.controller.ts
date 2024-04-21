import {Body, Controller, Post, Headers} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('token/access')
    createTokenAccess(@Headers('Authorization') rawToken: string) {
        const token = this.authService.extractTokenFromHeader(rawToken, true);

        const newToken = this.authService.rotateToken(token, false);

        return {
            accessToken: newToken,
        }
    }

    @Post('token/refresh')
    tokenRefresh(@Headers('Authorization') rawToken: string) {
        const token = this.authService.extractTokenFromHeader(rawToken, true);

        const newToken = this.authService.rotateToken(token, true);

        return {
            refreshToken: newToken,
        }
    }


    @Post('login')
    loginEmail(
        @Headers('authorization') rawToken: string,
    ) {
        const token = this.authService.extractTokenFromHeader(rawToken, false);

        const credentials = this.authService.decodeBasicToken(token);

        return this.authService.loginWithEmail(credentials);
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
