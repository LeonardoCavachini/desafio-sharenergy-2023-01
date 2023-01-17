import { Router } from 'express';
import UserController from '../Controllers/UserController';
import LoginHandle from '../Middlewares/LoginHandler';
import ValidateJWT from '../auth/validateJWT';

const routes = Router();

routes.post(
  '/login',
  LoginHandle,
  (req, res, next) => new UserController(req, res, next).login(),
);

routes.post(
  '/user/register',
  ValidateJWT,
  (req, res, next) => new UserController(req, res, next).create(),
);

routes.get(
  '/user/:id',
  ValidateJWT,
  (req, res, next) => new UserController(req, res, next).getById(),
);

routes.patch(
  '/user/:id',
  ValidateJWT,
  (req, res, next) => new UserController(req, res, next).update(),
);

routes.delete(
  '/user/:id',
  ValidateJWT,
  (req, res, next) => new UserController(req, res, next).delete(),
);

export default routes;
