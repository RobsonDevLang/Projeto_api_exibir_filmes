import { Injectable } from '@nestjs/common';
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
    
