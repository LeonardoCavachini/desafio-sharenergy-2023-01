class User {
  private name: string;
  private email: string;
  private tel: string;
  private cpf: string;
  private address: string;
  private id: string | undefined;
 
  constructor(
    name: string,
    email: string,
    tel: string,
    cpf: string,
    address: string,
    id: string | undefined,
  ) {
    this.name = name;
    this.email = email;
    this.tel = tel;
    this.cpf = cpf;
    this.address = address;
    this.id = id;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getTel() {
    return this.tel;
  }

  public setTel(tel: string) {
    this.tel = tel;
  }

  public getCpf() {
    return this.cpf;
  }

  public setCpf(cpf: string) {
    this.cpf = cpf;
  }

  public getAddress() {
    return this.address;
  }

  public setAddress(address: string) {
    this.address = address;
  }
}

export default User;
