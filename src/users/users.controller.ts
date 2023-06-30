import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    
    @Get()
    getAllUsers(@Query() filterQuery): User[] {
        const { searchTerm, orderBy } = filterQuery;

        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUser(@Param('id') id: string): User {
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() newUser: CreateUserDto): void {
        console.log(newUser instanceof CreateUserDto)
        return this.userService.createUser(
            newUser.name, 
            newUser.languagePreference, 
            newUser.showLanguagesPreference, 
            newUser.showProfilePreference, 
            newUser.termsAccepted)
    }

   /*  @Patch(':id') 
    updateUser(@Param('id') id: string, @Body() updateUser: UpdateUserDto): User {
        return this.userService.updateUser(id, updateUser);
    } */

    @Delete(':id') 
    removeUser(@Param('id') id: string): void {
        return this.userService.removeUser(id);
    }
}


