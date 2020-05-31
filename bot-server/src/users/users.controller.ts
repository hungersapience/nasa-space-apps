import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get(':userID')
    async getBook(@Param('userID') userID) {

        const user = await this.usersService.getUser(userID);
        return user;
    }

    @Post()
    async addUser(@Body() createUserDTO: CreateUserDTO) {

        const newUser = await this.usersService.addUser(createUserDTO);
        return newUser;
    }
}
