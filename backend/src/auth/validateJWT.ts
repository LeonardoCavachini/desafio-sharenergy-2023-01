import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { Response, NextFunction, Request } from 'express';
import UserODM from '../Models/UserODM';

interface TokenPayload {
  name: string;
}

interface RequestData extends Request {
  name?: TokenPayload | null;
}

export default async (req: RequestData, res: Response, next: NextFunction) => {
  const secret = process.env.SECRET_KEY as unknown as string;

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json('Token not found');
  }

  try {
    const decoded = jwt.verify(token, secret, {
      algorithms: ['HS256'],
    }) as jwt.JwtPayload;
    const receivedname = decoded.sub as string;
    const userODM = new UserODM();
    const name = await userODM.findByName(receivedname);

    req.name = name;

    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: 'Invalid token', err });
  }
};
