import { IsNotEmpty, IsEmail } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    postcode: string;

    @IsNotEmpty()
    phone: string;

    @IsEmail()
    email: string;
}



