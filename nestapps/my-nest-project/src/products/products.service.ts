import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

  async createSeedData() {
    const products = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 1000) + 100,
      description: `Description for Product ${i + 1}`,
      isActive: true,
      category: ['Electronics', 'Clothing', 'Books'][Math.floor(Math.random() * 3)],
    }));
    return this.productModel.insertMany(products);
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find({ isActive: true }).exec();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productModel.findOne({ id }).exec();
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }

  async update(id: number, updateData: Partial<Product>): Promise<Product> {
    const product = await this.productModel.findOneAndUpdate(
      { id },
      updateData,
      { new: true }
    ).exec();

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

}
