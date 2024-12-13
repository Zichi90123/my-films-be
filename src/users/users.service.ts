import { CreateUserDto, User, UserDocument } from '@lib/my-films-lib';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(username: string): Promise<UserDocument> {
    return this.userModel.findOne({ username });
  }

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    return this.userModel
      .create({
        ...createUserDto,
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .catch(error => {
        console.error(error);
        if (error.code === 11000) {
          throw new ConflictException();
        }

        throw new InternalServerErrorException();
      });
  }
}
