import { CreateUserDto } from './create-user.dto';
import { Model } from 'mongoose';
import { HashService } from './hash.service';
import { User, UserDocument } from './user.schema';
export declare class UserService {
    private userModel;
    private hashService;
    constructor(userModel: Model<UserDocument>, hashService: HashService);
    getUserByUsername(username: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    registerUser(createUserDto: CreateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
