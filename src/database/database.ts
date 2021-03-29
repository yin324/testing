import * as Mongoose from "mongoose";
import { UserModel } from "./user/user.model";
import {ServerEnvironment} from '../../server.environment';

let database: Mongoose.Connection;

export const connect = () => {
  // add your own uri below
  const mongoDbConnection = ServerEnvironment.MONGODB_CONNECTION;
  console.log(mongoDbConnection);

  if (database) {
    return 0;
  }

  Mongoose.connect(mongoDbConnection, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', () => {
    console.log('Error connecting to database');
  });

  return {
    UserModel,
  };
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
