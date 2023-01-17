import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

class RandomUserController {
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async randomUser() {
    const { page } = this.req.body;
    try {
      const { data } = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=6&seed=abc`,
      );
      return this.res.status(200).send(data.results);
    } catch (error) {
      this.next(error);
    }
  }
}

export default RandomUserController;
