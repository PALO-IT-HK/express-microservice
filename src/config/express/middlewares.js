import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, `../../../config.env.${process.env.ENVIRONMENT}`) });

export const middlewares = (app) => {
  app.use(bodyParser.json());
  return app;
};

export default middlewares;
