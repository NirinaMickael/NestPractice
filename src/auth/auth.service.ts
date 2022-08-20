import { Injectable } from "@nestjs/common";

@Injectable()

export class AuthService {
    signIn() : Object{
        return {name:"Nirina signIn"}
    }
    signUp() : Object {
        return {name:"Nirina signUp"}
    }
}