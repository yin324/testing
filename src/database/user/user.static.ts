import { IUserDocument, IUserModel } from './user.types';

export async function checkUserExist (
  this: IUserModel,
  {
    userName
  }: { userName: string; }
): Promise<boolean> {
  const isUserExist = await this.findOne({ userName })
    .then(user => {
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  return isUserExist;
}

export async function createUser(
  this: IUserModel,
  {
    userName,
    password,
    createdTime
  }: { userName: string; password: string; createdTime: Date;}
): Promise<string> {
  try {
    this.create({userName, password, createdTime});
    return "success";
  } catch (error) {
    return "error";
  }
}

export async function findUserByUserName (
  this: IUserModel,
  {
    userName
  }: { userName: string; }
): Promise<IUserDocument> {
  const user = await this.findOne({ userName })
    .then(user => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
  return user;
}
