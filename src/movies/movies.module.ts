import { Module } from '@nestjs/common';
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