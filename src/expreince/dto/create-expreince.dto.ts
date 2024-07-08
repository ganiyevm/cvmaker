import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateExpreinceDto {
  @IsNotEmpty()
  company_name: string;

  @IsNotEmpty()
  company_address: string;

  @IsNotEmpty()
  postion: string;

  @IsNotEmpty()
  start_time: string;

  @IsNotEmpty()
  end_time: string;

}
