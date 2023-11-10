import { IUser } from "../models/IUser";

export class UserService{
    static getUser(id: string) {
        throw new Error("Method not implemented.");
    }
    private static users:IUser[] = [
        {sno:2, name:"shayan", age:20},
        {sno:2, name:"shan", age:25},
        {sno:3, name:"sayan", age:15},
        {sno:3, name:"sayan", age:15},
        {sno:3, name:"sayan", age:15},
    ]
    public static getAllUsers(){
        return this.users
    }
}