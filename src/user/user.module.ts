import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { UserSchema } from './scemas/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:"user",schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
