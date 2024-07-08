import { Module } from '@nestjs/common';
import { ExpreinceService } from './expreince.service';
import { ExpreinceController } from './expreince.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { ExperienceSchema } from './schema/experience.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:"expreince",schema:ExperienceSchema}])],
  controllers: [ExpreinceController],
  providers: [ExpreinceService],
})
export class ExpreinceModule {}
