import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreeterModule } from './greeter/greeter.module';
import { MongooseModule } from '@nestjs/mongoose';

const url = "mongodb+srv://subugee:subugee222@cluster0.shfpbhv.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0";
@Module({
  imports: [
    GreeterModule,
    MongooseModule.forRoot(url)
  ], //submodule
  controllers: [AppController], //home controller
  providers: [AppService], //home service
})
export class AppModule { }
