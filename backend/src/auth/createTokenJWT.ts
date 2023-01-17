import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

export default class Token {
  static createToken(username: string) {
    const dataName = username;
    // const { SECRET_KEY } = process.env;

    const token = jwt.sign({}, process.env.SECRET_KEY as string, {
      subject: dataName,
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return token;
  }
}
