interface User {
  nombre: string;
  apellido: string;
}

interface IListByPage {
  getByPage(page: number, pageSize: number): Promise<User[]>;
}

abstract class AbstractPersistencia {
  abstract insert(user: User): Promise<User>;
  abstract update(id: number, user: User): Promise<User>;
  abstract delete(id: number): Promise<User>;
  abstract getOne(id: number): Promise<User>;
  abstract getAll(id: number): Promise<User[]>;
}

class UserOperation extends AbstractPersistencia implements IListByPage {
  insert(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(id: number, user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<User> {
    throw new Error("Method not implemented.");
  }
  getOne(id: number): Promise<User> {
    throw new Error("Method not implemented.");
  }
  getAll(id: number): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  getByPage(page: number, pageSize: number): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
}
