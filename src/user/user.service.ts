import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './scemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel("user") private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll() {
    const result= await this.userModel.find();
    return result
  }

  async findOne(id: ObjectId) {
    const result= await this.userModel.findById(id);
    return result
  }

  update(id: ObjectId, updateUserDto: UpdateUserDto) {
    const result= this.userModel.findByIdAndUpdate(id,updateUserDto)
    return result
  }

  async remove(id: ObjectId) {
    const result= await this.userModel.deleteOne({_id:id})
    return `User deleted`  }
}
