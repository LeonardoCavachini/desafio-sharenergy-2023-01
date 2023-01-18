import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

class HttpCatsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async httpCat() {
    try {
      const { httpCode } = this.req.params;
      const response = await axios.get(`https://http.cat/${httpCode}`, {
        responseType: 'arraybuffer',
      });
      return this.res.contentType('image/png')
        .end(Buffer.from(response.data, 'binary').toString('base64'));
    } catch (error) {
      this.next(error);
    }
  }
}

export default HttpCatsController;