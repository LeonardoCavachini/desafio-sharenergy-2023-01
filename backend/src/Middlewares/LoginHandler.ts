import { NextFunction, Request, Response } from 'express';

const loginHandle = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (username !== 'desafiosharenergy' || password !== 'sh@r3n3rgy') {
    return res
      .status(401)
      .json({ message: 'Incorrect name or username' });
  }
  next();
};

export default loginHandle;
