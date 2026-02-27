import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `User${i + 1}`, // or 'Subrammanian' + (i+1)
        status: true
    }));

    findAll() {
        return this.users;
    }
}
