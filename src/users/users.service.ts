import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
// constructor(
  //   @InjectRepository(Task)
  //   private taskRepository: Repository<Task>
  // ){

  // }
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){

  }  

  // async create(createTaskDto: CreateTaskDto) {
  //   const task = this.taskRepository.create(createTaskDto);
  //   return await this.taskRepository.save(task);
  // }
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

   // async findAll() {
  //   return await this.taskRepository.find();
  // }
  async findAll() {
    return await this.userRepository.find();
  }

  // async findOne(id: number) {
  //   return await this.taskRepository.findBy({
  //     id: id
  //   });
  // }
  async findOne(id: number) {
    return await this.userRepository.findBy({
      id: id
    });
  }

   // async update(id: number, updateTaskDto: UpdateTaskDto) {
  //   await this.taskRepository.update(id, updateTaskDto);
  //   return await this.findOne(id);
  // }
  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return await this.findOne(id);
  }

  // async remove(id: number) {
  //  await this.taskRepository.delete(id);
  //  return{message: "foi apagdo"}
  // }
  async remove(id: number) {
    await this.userRepository.delete(id);
    return{message: `o usario de id: #${id} foi removido`};
  }

  

  

 

  

 

  
  
}
