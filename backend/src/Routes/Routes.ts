import { Router } from 'express';
import UserController from '../Controllers/UserController';
import RandomUserController from '../Controllers/RandomUserController';
import HttpCatsController from '../Controllers/HttpCats';
import RandomDogsController from '../Controllers/RandomDogsController';
import LoginHandle from '../Middlewares/LoginHandler';
import ValidateJWT from '../auth/validateJWT';

const routes = Router();

routes.post(
  '/login',
  LoginHandle,
  (req, res, next) => new UserController(req, res, next).login(),
);

routes.get(
  '/users',
  ValidateJWT,
  (req, res, next) => new UserController(req, res, next).getAll(),
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

routes.post(
  '/randomUser',
  ValidateJWT,
  (req, res, next) => new RandomUserController(req, res, next).randomUser(),
);

routes.get(
  '/httpCat/:httpCode',
  ValidateJWT,
  (req, res, next) => new HttpCatsController(req, res, next).httpCat(),
);

routes.get(
  '/randomDogs',
  ValidateJWT,
  (req, res, next) => new RandomDogsController(req, res, next).randomDogs(),
);

export default routes;
