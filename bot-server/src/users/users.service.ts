import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users;

    constructor() {

        this.users = [{

            id: 'abc',
            name: 'Sr Abc',
            contato: '9999909909',
            email: 'abc@cbz.com'
        }];
    }

    getUser(userID): Promise<any> {

        let id = userID;
        return new Promise(resolve => {
            const user = this.users.find(user => user.id === id);

            if (!user) {
                throw new HttpException('User does not exist!', 404);
            }
            resolve(user);
        });
      }

      addUser(user): Promise<any> {

        return new Promise(resolve => {
            this.users.push(user);
            resolve(this.users);
        });
    }
}
