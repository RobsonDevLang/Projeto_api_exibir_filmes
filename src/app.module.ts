import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entities/movie.entity';
@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'banco.db',
      entities:[
        User,
        Movie
      ],
      synchronize: true // somente em desenvolvimento
    }),
    UsersModule,
    MoviesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
