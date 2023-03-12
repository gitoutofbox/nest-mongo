import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './modules/db/db.module';
import { CommentsModule } from './comments/comments.module';
import { MovieModule } from './modules/movie/movie.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    DbModule,
    CommentsModule,
    MovieModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
