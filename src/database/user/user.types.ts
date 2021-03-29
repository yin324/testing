import { Document, Model } from "mongoose";

export interface IUser {
  userName?: string,
  password?: string,
  createdTime?: Date
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends Model<IUserDocument> {
  checkUserExist: (
    this: IUserModel,
    {
      userName,
    }: { userName: string; }
  ) => Promise<boolean>;
  createUser: (
    this: IUserModel,
    {
      userName,
      password,
      createdTime,
    }: { userName: string; password: string; createdTime:Date; }
  ) => Promise<string>;
  findUserByUserName: (
    this:IUserModel,
    {
      userName
    }: { userName: string; }
  ) => Promise<IUserDocument>;
}
