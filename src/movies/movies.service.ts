import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>
  ){

  }    

  async create(createMovieDto: CreateMovieDto) {
    const movies = this.movieRepository.create(createMovieDto);
    return await this.movieRepository.save(movies);
  }

  async findAll() {
    return await this.movieRepository.find();
  }

  async findOne(id: number) {
    return await this.movieRepository.findBy({
      id: id
    });
  }

  async update(id: number, UpdateMovieDto: UpdateMovieDto) {
    await this.movieRepository.update(id, UpdateMovieDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.movieRepository.delete(id);
    return{message: `o filme de id: #${id} foi removido`};
  }
}
=======
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieEntity } from './entities/movie.entity';
import { UpdateMovieDto } from './dtos/update-movie.dto';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(MovieEntity)
        private moviesRepository: Repository<MovieEntity>

    ) { }

    async create(createMovieDto: any) {
        const user = this.moviesRepository.create(createMovieDto)
        return await this.moviesRepository.save(user);
    }

    async findAll() {
        return await this.moviesRepository.find();
    }

    async findOne(id: number) {
        return await this.moviesRepository.findBy({
            id: id
        })
    }

    async update(id: number, updateMovieDto: UpdateMovieDto ){
        await this.moviesRepository.update(id, updateMovieDto)
        return await this.findOne(id);
    }
    async remove(id: number) {
        await this.moviesRepository.delete(id);
        return { message: 'Foi apagado! ' }
      }

  }
    
>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
