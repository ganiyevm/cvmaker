import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop()
  author_id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

}

export const BlogSchema = SchemaFactory.createForClass(Blog);