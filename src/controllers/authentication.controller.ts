import {Router, Request, Response} from "express";
import { AuthenticationService } from "../services/authentication.service"
import { LoginRequest, LoginResponse, SignUpRequest, SignUpResponse } from '../interfaces/authentication.interface';

const router = Router();
const authenticationService = new AuthenticationService();

router.post("/sign-up", async (req: Request, res: Response) => {
  let signUpResponse: SignUpResponse;
  const newUser: SignUpRequest = {
    userName: req.body.userName,
    password: req.body.password,
    createdTime: new Date()
  }

  const isUserExist = await authenticationService.checkUserExist(newUser);
  if (isUserExist) {
    signUpResponse = {
      result: "User Exists"
    };
  } else {
    signUpResponse = {
      result: await authenticationService.signUp(newUser)
    };
  }
  return res.json({
    signUpResponse
  });
});

router.post("/login", async (req: Request, res:Response) => {
  const loginRequest: LoginRequest = {
    userName: req.body.userName,
    password: req.body.password
  }

  const loginResponse: LoginResponse = {
    result: await authenticationService.login(loginRequest)
  }

  if(loginResponse.result == "Successfully login") {
    const jwt = await authenticationService.generateJWT(loginRequest.userName);
    res.cookie('jwt', jwt, {
      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] ===   'https',
      sameSite: 'none'
    });
  }

  return res.json({
    loginResponse
  });
})


export const AuthenticationController: Router = router;
