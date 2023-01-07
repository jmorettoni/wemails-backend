import { UserService } from './users.service';
import { CreateUserDto } from './create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserByUsername(param: any): Promise<import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    registerUser(createUserDto: CreateUserDto): Promise<import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
