import app from './configuredApp';
import routes from './routes';

app.use('/', routes);

export default app;
