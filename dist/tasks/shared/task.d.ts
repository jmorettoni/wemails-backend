import { Document } from "mongoose";
export declare class Task extends Document {
    description: string;
    object: object;
    completed: boolean;
}
