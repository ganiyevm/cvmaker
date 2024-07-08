import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EducationDocument = HydratedDocument<Education>;

@Schema()
export class Education {
  @Prop()
  title: string;

  @Prop()
  start_time: string;

  @Prop()
  end_time: string;

  @Prop()
  position: string;

  @Prop()
  faculty: string;

  @Prop()
  description: string;

  @Prop()
  isactive: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);