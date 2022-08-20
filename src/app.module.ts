import { AuthModule } from './auth/auth.module';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthentificationMiddleware } from './common/middlewares/Authentification.middleware';

@Module({
  imports: [
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..','views'),
      exclude:['/api']
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
// les modules qui incluent le middleware doivent implémenter
// NestModule
export class AppModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthentificationMiddleware)
    .forRoutes({path:'cats',method:RequestMethod.ALL});
    // forRoutes can take only string,a lot string ,an RouteInfo
    // an Controller Class

    // apply : peut prender soit un seul middleware
    // soit plusieurs arguments
  }
}
// path : can handling with the regex expression

// Dans l'exemple ci-dessous, nous avons configuré le AuthentificationMiddleware
//pour les /auth 