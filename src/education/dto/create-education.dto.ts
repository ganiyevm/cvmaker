import { IsNotEmpty, IsEmail } from 'class-validator';
export class CreateEducationDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    start_time: string;

    @IsNotEmpty()
    end_time: string;

    @IsNotEmpty()
    position: string;

    @IsNotEmpty()
    faculty: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    isactive: boolean;
}



