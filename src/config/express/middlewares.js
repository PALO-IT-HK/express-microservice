import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, `../../../config.env.${process.env.NODE_ENV}`) });

export const middlewares = (app) => {
  app.use(bodyParser.json());
  app.use(helmet());
  return app;
};

export default middlewares;
