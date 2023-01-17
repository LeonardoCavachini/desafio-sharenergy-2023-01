import User from '../Domain/User/User';
import IUser from '../Interfaces/IUser';
import UserODM from '../Models/UserODM';
import Token from '../auth/createTokenJWT';

class UserService {
  private createToken = Token.createToken;
  private createUserDomain(user: IUser | null): User | null {
    if (user) {
      return new User(
        user.name,
        user.email,
        user.tel,
        user.cpf,
        user.address,
        user.id,
      );
    }
    return null;
  }

  public async register(data: IUser) {
    const userODM = new UserODM();
    const newUser = await userODM.create(data);
    return this.createUserDomain(newUser);
  }

  async login(username: string) {
    const token = this.createToken(username);

    return { token };
  }

  public async getById(id: string) {
    const userODM = new UserODM();
    const user = await userODM.findById(id);
    return this.createUserDomain(user);
  }

  public async update(id: string, data:IUser) {
    const userODM = new UserODM();
    const user = await userODM.update(id, data);
    return this.createUserDomain(user);
  }

  public async delete(id: string) {
    const userODM = new UserODM();
    await userODM.delete(id);
  }
}

export default UserService;
