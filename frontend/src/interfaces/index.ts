export interface UsersRandom {
  name:{
      title:string,
      first:string,
      last:string
  }
  dob:{
      age:number
  }
  email:string
  picture:{
    thumbnail:string
  }
  login:{
      username:string
  }
};

export interface Users {
  _id: string;
  name: string;
  tel: string;
  email: string;
  cpf: string;
  address: string;
}