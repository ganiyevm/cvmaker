import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationDto } from './create-education.dto';

export class UpdateEducatoinDto extends PartialType(CreateEducationDto) {
    
  firstname?: string;

  lastname?: string;

  address: string;

  city: string;

  postcode: string;

  phone: string;

  email: string;
}
