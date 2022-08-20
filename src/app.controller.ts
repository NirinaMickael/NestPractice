import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('signin')
  signIn(){
    return "Sign In"
  }
  @Get("signup")
  signUp(){
    return this.appService.SignUp();
  }
}
