import { Repository, getRepository } from 'typeorm';

import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import IUsersRepository from '../../../repositories/IUsersRepository';

import User from '../entities/User';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const userFound = await this.ormRepository.findOne(id);

    return userFound;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const userFound = await this.ormRepository.findOne({
      where: { email },
    });

    return userFound;
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const createdUser = await this.ormRepository.create({
      name,
      email,
      password,
    });

    const savedUser = await this.ormRepository.save(createdUser);

    return savedUser;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async delete(user: User): Promise<User> {
    return this.ormRepository.remove(user);
  }
}
