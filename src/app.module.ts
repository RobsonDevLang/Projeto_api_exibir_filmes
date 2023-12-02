import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
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
=======
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig'; 
import { MoviesModule } from './movies/movies.module';
@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config), MoviesModule],
  controllers: [AppController],
  providers: [AppService,  ],
  
>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
})
export class AppModule {}
