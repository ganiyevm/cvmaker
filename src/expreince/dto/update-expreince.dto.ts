import { PartialType } from '@nestjs/mapped-types';
import { CreateExpreinceDto } from './create-expreince.dto';

export class UpdateExpreinceDto extends PartialType(CreateExpreinceDto) {
    company_name?: string;
    company_address?: string;
    postion?: string;
    start_time?: string;
    end_time?: string;



}
