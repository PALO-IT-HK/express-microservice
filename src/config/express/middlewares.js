import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

const corsOptions = {
  optionsSuccessStatus: 200,
}

const middlewares = (app) => {
  app.use(bodyParser.json());
  app.use(cors(corsOptions));
  app.use(helmet());
  return app;
};

export default middlewares;
