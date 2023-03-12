import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers()
    }

    @Post()
    addUser(@Body() body: {name: string, email: string, password: string}) {
        return this.userService.addUser({
            name: body.name,
            email: body.email,
            password: body.password
        })
    }
}
