import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createUserDto: any) {
    const user = this.userRepository.create(createUserDto)
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findBy({
      id: id
    });
  }


  async update(id: number, updateUserDto: any) {
    await this.userRepository.update(id, updateUserDto)
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
    return { message: 'Foi apagado! ' }
  }
}

