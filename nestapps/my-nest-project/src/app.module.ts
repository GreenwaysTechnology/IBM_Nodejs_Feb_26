import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

const url = "mongodb+srv://subugee:subugee222@cluster0.shfpbhv.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0";

@Module({
  imports: [
    UserModule,
    ProductsModule,
    MongooseModule.forRoot(url), // or MongoDB Atlas URI
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
