import {Document} from "mongoose";
export class Task extends Document { 
    description : string ; 
    object : object ; 
    completed : boolean ;
}