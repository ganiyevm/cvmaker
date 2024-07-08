import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { BlogModule } from './blog/blog.module';
import { EducationModule } from './education/education.module';
import { ExpreinceModule } from './expreince/expreince.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/lesson69'),
    UserModule,
    BlogModule,
    EducationModule,
    ExpreinceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
