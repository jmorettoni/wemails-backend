import { CreateUserDto } from './create-user.dto';
import { Model } from 'mongoose';
import { HashService } from './hash.service';
import { UserDocument } from './user.schema';
export declare class UserService {
    private userModel;
    private hashService;
    constructor(userModel: Model<UserDocument>, hashService: HashService);
    getUserByUsername(username: string): Promise<any>;
    registerUser(createUserDto: CreateUserDto): Promise<any>;
}
