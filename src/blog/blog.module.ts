import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { BlogSchema } from './schema/blog.schema';


@Module({
  imports:[MongooseModule.forFeature([{name:"blog",schema:BlogSchema}])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
