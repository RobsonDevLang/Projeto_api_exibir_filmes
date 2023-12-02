<<<<<<< HEAD
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private   usersService: UsersService) {}
 
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import path from 'path';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
<<<<<<< HEAD
  
=======

>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

<<<<<<< HEAD
   
=======
>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
<<<<<<< HEAD
 
  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  
=======

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateUserDto) {
    return this.usersService.update(id, updateTaskDto);
  }

>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
<<<<<<< HEAD
 
=======
>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
}
