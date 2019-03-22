import express from 'express';
import setEnvironments from './config/dotenv/setEnvironments';
import configure from './config/express/middlewares';
import router from './routes/router';

setEnvironments();

const app = configure(express());
const port = process.env.PORT;

app.use('/', router);

export { app, port };
