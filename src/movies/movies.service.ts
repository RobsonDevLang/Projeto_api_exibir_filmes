import { Injectable } from '@nestjs/common';
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
