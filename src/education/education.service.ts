import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducatoinDto } from './dto/update-education.dto';
import { Education } from './schema/education.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';



@Injectable()
export class EducationService {
  constructor(@InjectModel("education") private educationModel: Model<Education>) {}
  async create(createEducationDto: CreateEducationDto): Promise<Education> {
    const createdEducation = new this.educationModel(createEducationDto);
    return createdEducation.save();
  }

  async findAll() {
    const result= await this.educationModel.find();
    return result
  }

  async findOne(id: ObjectId) {
    const result= await this.educationModel.findById(id);
    return result
  }

  update(id: ObjectId, updateEducationDto: UpdateEducatoinDto) {
    const result= this.educationModel.findByIdAndUpdate(id,updateEducationDto)
    return result
  }


  async remove(id: ObjectId) {
    const result= await this.educationModel.deleteOne({_id:id})
    return `Education deleted`  }
}
