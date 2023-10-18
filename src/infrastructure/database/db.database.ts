import { errors } from "../../utils/messages.utils";
import { IDatabase } from "../interfaces/database.interface";

export class Db<T> implements IDatabase<T> {

  protected _connection: IDatabase<T>;

  constructor(connection: IDatabase<T>) {
    if (this.constructor == Db<T>) {
      throw Error(errors.abstract);
    }

    this._connection = connection;
  }

  dbInsert(cmd: string, obj: T): Promise<number> {
    return this._connection.dbInsert(cmd, obj);
  }

  dbSelect(cmd: string): Promise<T> {
    return this._connection.dbSelect(cmd);
  }

  dbDelete(cmd: string, id: number): Promise<number> {
    return this._connection.dbDelete(cmd, id);
  }

  dbUpdate(cmd: string, obj: T): Promise<number> {
    return this._connection.dbUpdate(cmd, obj);
  }  

  dbConnect(): void {
    this._connection.dbConnect()
  }

  dbClose(): void {
    this._connection.dbClose()
  }
}
