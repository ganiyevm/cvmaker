import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema()
export class Experience {
  @Prop()
  company_name: string;

  @Prop()
  company_address: string;

  @Prop()
  postion: string;

  @Prop()
  start_time: string;

  @Prop()
  end_time: string;

  
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);