import { AuthService } from './auth.service';
import { Controller, Get, Post, Res } from "@nestjs/common";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}
    @Get('login')
    SignIn(){
        return this.authService.signIn();
    }
    @Post('signup')
    SignUp(){
        return this.authService.signUp();
    }
}