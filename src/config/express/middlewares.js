import bodyParser from 'body-parser';
import helmet from 'helmet';

const middlewares = (app) => {
  app.use(bodyParser.json());
  app.use(helmet());
  return app;
};

export default middlewares;
