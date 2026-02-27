import { Controller, Get } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    //di
    constructor(private userService: UserService) { }

    @Get()
    findAll(): User[] {
        return this.userService.findAll()
    }

}