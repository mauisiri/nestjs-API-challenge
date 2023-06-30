import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: '1',
            name: 'Iris-Hostelworld',
            languagePreference: 'English',
            showLanguagesPreference: true,
            showProfilePreference: true,
            termsAccepted: true,
        }
    ];

    getAllUsers(): User[] {
        return this.users;
    }

    getUser(id: string): User {
        const user = this.users.find((item) => item.id ===id);

        if(!user){
            throw new NotFoundException("User not found")
        }

        return user;
    }

    createUser(
        name: string,
        languagePreference: string,
        showLanguagesPreference: boolean,
        showProfilePreference: boolean,
        termsAccepted: boolean,) {

        this.users.push({
            id: (Math.floor(Math.random() * 2000) + 1).toString(),
            name,
            languagePreference,
            showLanguagesPreference,
            showProfilePreference,
            termsAccepted,
        });
    }

    updateUser(
        id: string, 
        languagePreference: string, 
        showLanguagesPreference: boolean,
        showProfilePreference: boolean,
        termsAccepted: boolean,) {

        const user: User = this.getUser(id);
        user.languagePreference = languagePreference;
        user.showLanguagesPreference = showLanguagesPreference;
        user.showProfilePreference = showProfilePreference;
        user.termsAccepted = termsAccepted;

    }

    removeUser(id: string) { 
        const index = this.users.findIndex((user) => user.id === id);
        if (index >=0) {
            this.users.splice(index, 1)
        }
    }
}
