import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import router from './routers';

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
