import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Movie])
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesModule, MoviesService]
})
export class MoviesModule {}


// @Module({
//   imports: [
//     TypeOrmModule.forFeature([User])
//   ],
//   controllers: [UsersController],
//   providers: [UsersService],
//   exports: [UsersModule, UsersService]
// })
// export class UsersModule {}
=======
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}
>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
