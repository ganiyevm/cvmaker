import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { EducationSchema } from './schema/education.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:"education",schema:EducationSchema}])],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}
