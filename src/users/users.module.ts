import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
<<<<<<< HEAD
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController],
=======
  imports:[TypeOrmModule.forFeature([User])],
>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
  providers: [UsersService],
  exports: [UsersModule, UsersService]
})
export class UsersModule {}
