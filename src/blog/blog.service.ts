import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './schema/blog.schema';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';




@Injectable()
export class BlogService {
  constructor(@InjectModel("blog") private blogModel: Model<Blog>) {}
  async create(createUserDto: CreateBlogDto): Promise<Blog> {
    const createdBlog = new this.blogModel(createUserDto);
    return createdBlog.save();
  }

  async findAll() {
        const result= await this.blogModel.find();
        return result
      }

      async findOne(id: ObjectId) {
            const result= await this.blogModel.findById(id);
            return result
          }

          update(id: ObjectId, updateBlogDto: UpdateBlogDto) {
                const result= this.blogModel.findByIdAndUpdate(id,updateBlogDto)
                return result
              }

              async remove(id: ObjectId) {
                    const result= await this.blogModel.deleteOne({_id:id})
                    return `Blog deleted`  }
}



