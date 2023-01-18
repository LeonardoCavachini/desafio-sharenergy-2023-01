import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

class RandomDogsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async randomDogs() {
    try {
      const { data } = await axios.get(
        `https://random.dog/woof?filter=mp4,webm`,
      );
      return this.res.status(200).send(data);
    } catch (error) {
      this.next(error);
    }
  }
}

export default RandomDogsController;