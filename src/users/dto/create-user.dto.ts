import { IsBoolean, IsNotEmpty, IsString, MinLength, IsIn, MaxLength } from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name: string
    @IsString()
    @IsNotEmpty()
    @IsIn(['English', 'Spanish', 'Portuguese'])
    languagePreference: string
    @IsBoolean()
    @IsNotEmpty()
    showLanguagesPreference: boolean
    @IsBoolean()
    @IsNotEmpty()
    showProfilePreference: boolean
    @IsBoolean()
    @IsNotEmpty()
    termsAccepted: boolean
}