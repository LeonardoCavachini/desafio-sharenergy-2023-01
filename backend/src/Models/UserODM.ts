import { Schema } from 'mongoose';
import IUser from '../Interfaces/IUser';
import AbstractODM from './AbstractODM';

class UserODM extends AbstractODM<IUser> {
  constructor() {
    const schema = new Schema<IUser>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      tel: { type: String, required: true },
      cpf: { type: String, required: true },
      address: { type: String, required: true },
    });
    super(schema, 'User');
  }

  public async findById(_id: string): Promise<IUser | null> {
    return this.model.findOne({ _id });
  }
}

export default UserODM;
