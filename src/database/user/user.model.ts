import * as Mongoose from "mongoose";
import UserSchema from "./user.schema";
import { IUserDocument, IUserModel } from "./user.types";

export const UserModel = Mongoose.model<IUserDocument>(
  "user",
  UserSchema
) as IUserModel;
