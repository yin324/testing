import { LoginRequest, SignUpRequest } from '../interfaces/authentication.interface';
import { UserModel } from '../database/user/user.model';
import * as Bcrypt from "bcrypt";
import * as Jwt from "jsonwebtoken";
import {ServerEnvironment} from '../../server.environment';

export class AuthenticationService {
  constructor() {
  }

  signUp = async function(signUpRequest: SignUpRequest): Promise<string> {
    signUpRequest.password = await Bcrypt.hash(signUpRequest.password, 10);
    const createNewUser = await UserModel.createUser(signUpRequest);
    return "success";
  }

  checkUserExist = async function(signUpRequest: SignUpRequest): Promise<boolean> {
    const isUserExist = await UserModel.checkUserExist({
      userName: signUpRequest.userName,
    }).then(
      user => {
        return user;
      }
    )
    return isUserExist;
  }

  login = async function(loginRequest: LoginRequest): Promise<string> {
    const existingUser = await UserModel.findUserByUserName({
      userName: loginRequest.userName
    })

    if(!existingUser) {
      return "User doesnt exist. Register now";
    }
    const isPasswordMatch = await Bcrypt.compareSync(loginRequest.password, existingUser.password);
    return (isPasswordMatch) ? "Successfully login" : "Password incorrect";
  }

  generateJWT = async function(userName: string) {
    return Jwt.sign({userName}, ServerEnvironment.JWT_SECRETKEY, {expiresIn:"5d"});
  }
}
