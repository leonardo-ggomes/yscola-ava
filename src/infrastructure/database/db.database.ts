import { errors } from "../../utils/messages.utils";
import { IDatabase } from "./interfaces/database.interface";

export class Db<T> implements IDatabase<T> {

  protected _connection: IDatabase<T>;

  constructor(connection: IDatabase<T>) {
    if (this.constructor == Db<T>) {
      throw Error(errors.abstract);
    }

    this._connection = connection;
  }

  public dbInsert(cmd: string, params: Array<any>): Promise<number> {
    return this._connection.dbInsert(cmd, params);
  }

  public dbSelect(cmd: string, params: Array<any>): Promise<T> {
    return this._connection.dbSelect(cmd, params);
  }

  public dbDelete(cmd: string, params: Array<any>): Promise<number> {
    return this._connection.dbDelete(cmd, params);
  }

  public dbUpdate(cmd: string, params: Array<any>): Promise<number> {
    return this._connection.dbUpdate(cmd, params);
  }  

  public dbConnect(): void {
    this._connection.dbConnect()
  }

  public dbClose(): void {
    this._connection.dbClose()
  }
}
