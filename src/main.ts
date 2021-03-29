import * as express from 'express';
import * as path from 'path';
import { connect } from './database/database';
import { HealthController } from './controllers/health.controller';
// import {testDBConnection} from "../src/scripts/testdb";
import { AuthenticationController } from './controllers/authentication.controller';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// testDBConnection();

connect();
app.use(express.static(path.join(__dirname, 'dist')));
app.use("/_health", HealthController);
app.use("/user", AuthenticationController);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

