import { Schema } from "mongoose";
import { checkUserExist, createUser, findUserByUserName } from "./user.static";
const UserSchema = new Schema({
  userName: String,
  password: String,
  createdTime: Date
});

UserSchema.statics.checkUserExist = checkUserExist;
UserSchema.statics.createUser = createUser;
UserSchema.statics.findUserByUserName = findUserByUserName;

export default UserSchema;

