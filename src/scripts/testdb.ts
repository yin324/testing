import { disconnect } from "../database/database";
import { UserModel } from '../database/user/user.model';


export function testDBConnection(){

  // test static methods
  const newUser = UserModel.findOne({
    userName: "Thomas22",
    password: "Thomas1234",
    createdTime: new Date()
  });

  UserModel.createUser({
    userName: "Thomasxdd",
    password: "Thomas1234",
    createdTime: new Date()
  });

  // const SecondNewUser = await UserModel.findOneOrCreate({
  //   userName: newUserInterface.userName,
  //   password: newUserInterface.password,
  //   createdTime: new Date()
  // });

  console.log(newUser);
  disconnect();
};


// const test = async (newUserInterface: NewUserInterface): Promise<boolean> => {
//   try {
//     const newUser = await UserModel.findOneOrCreate({
//       userName: newUserInterface.userName,
//       password: newUserInterface.password,
//       createdTime: new Date()
//     });
//     console.log(newUser);
//     if(newUser) {
//       return true;
//     }
//     return false;
//   } catch (error) {
//     console.log(error);
//   }
//   return false;
// }
