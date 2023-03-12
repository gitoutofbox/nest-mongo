import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    getUsers() {
        return this.userModel.find().limit(20).exec();
    }

    addUser(user: {name: string, email: string, password: string}) {
        const newUser = new this.userModel(user);
        return newUser.save();
    }
}
