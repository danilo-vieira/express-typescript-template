import ICreateUserDTO from '../dtos/ICreateUserDTO';

import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create({ name, email, password }: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
  delete(user: User): Promise<User>;
}
