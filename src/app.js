import express from 'express';
import configure from './config/express/middlewares';
import router from './routes/router';

const app = configure(express());
const port = process.env.PORT;

app.use('/', router);

export { app, port };
