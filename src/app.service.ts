import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  signIn(): string {
    return 'Hello World!';
  }
  SignUp() : Object {
    return {name:"Nirina"};
  }
}
