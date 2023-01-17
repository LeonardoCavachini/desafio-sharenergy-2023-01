import express from 'express';
import cors from 'cors';
import ErrorHandler from './Middlewares/ErrorHandler';
import routes from './Routes/Routes';

const app = express();

app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,DELETE,OPTIONS,PUT, PATCH',
  );
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(ErrorHandler.handle);

export default app;