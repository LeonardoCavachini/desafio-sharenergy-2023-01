import { NextFunction, Request, Response } from 'express';
import IUser from '../Interfaces/IUser';
import UserService from '../Services/UserService';

class UserController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserService();
  }

  public async create() {
    const user: IUser = {
      name: this.req.body.name,
      email: this.req.body.email,
      tel: this.req.body.tel,
      cpf: this.req.body.cpf,
      address: this.req.body.address,
    };

    try {
      const newUser = await this.service.register(user);
      return this.res.status(201).json(newUser);
    } catch (error) {
      this.next(error);
    }
  }

  public async login() {
    const { username } = this.req.body;
    const token = await this.service.login(username);
    return this.res.status(200).json(token);
  }

  public async getById() {
    const { id } = this.req.params;
    const user = await this.service.getById(id);
    return this.res.status(200).json(user);
  }

  public async update() {
    const { id } = this.req.params;
    const body: IUser = {
      name: this.req.body.name,
      email: this.req.body.email,
      tel: this.req.body.tel,
      cpf: this.req.body.cpf,
      address: this.req.body.address,
    };
    const user = await this.service.update(id, body);
    return this.res.status(200).json(user);
  }

  public async delete() {
    const { id } = this.req.params;
    await this.service.delete(id);
    return this.res.status(200).json('user deleted');
  }
}

export default UserController;
