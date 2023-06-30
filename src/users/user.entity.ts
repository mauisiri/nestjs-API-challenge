import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    name: string;
    languagePreference: string;
    showLanguagesPreference: boolean;
    showProfilePreference: boolean;
    termsAccepted: boolean;
}