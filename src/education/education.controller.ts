import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducatoinDto } from './dto/update-education.dto';
import { ObjectId } from 'mongoose';


@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  create(@Body() createEducationDto: CreateEducationDto) {
    return this.educationService.create(createEducationDto);
  }

  @Get()
  findAll() {
    return this.educationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.educationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: ObjectId, @Body() updateEducationDto: UpdateEducatoinDto) {
    return this.educationService.update(id, updateEducationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.educationService.remove(id);
  }
}
