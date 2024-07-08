import { Injectable } from '@nestjs/common';
import { CreateExpreinceDto } from './dto/create-expreince.dto';
import { UpdateExpreinceDto } from './dto/update-expreince.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Experience } from './schema/experience.schema';


@Injectable()
export class ExpreinceService {
  constructor(@InjectModel("expreince") private expreinceModel: Model<Experience>) {}

  async create(createExpreinceDto: CreateExpreinceDto): Promise<Experience>{
    const createdUser = new this.expreinceModel(createExpreinceDto);
    return createdUser.save();
  }

  async findAll() {
    const result= await this.expreinceModel.find();
    return result
  }

  async findOne(id: ObjectId) {
    const result= await this.expreinceModel.findById(id);
    return result
  }

  update(id: ObjectId, updateUserDto: UpdateExpreinceDto) {
    const result= this.expreinceModel.findByIdAndUpdate(id,updateUserDto)
    return result
  }

  async remove(id: ObjectId) {
    const result= await this.expreinceModel.deleteOne({_id:id})
    return `User deleted`  }
}

