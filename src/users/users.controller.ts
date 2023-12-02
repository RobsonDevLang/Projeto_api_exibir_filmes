import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private   usersService: UsersService) {}
 
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // No método create do UsersController
@Post()
create(@Body() createUserDto: CreateUserDto) {
    try {
        const user = this.usersService.create(createUserDto);
        return user; // Ou, se preferir, você pode retornar um objeto { success: true, data: user }
    } catch (error) {
        throw new HttpException('Erro ao criar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

  
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

   
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
 
  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
 
}
