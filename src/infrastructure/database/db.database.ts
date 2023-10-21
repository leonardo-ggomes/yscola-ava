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

  public dbInsert(cmd: string, obj: T): Promise<number> {
    return this._connection.dbInsert(cmd, obj);
  }

  public dbSelect(cmd: string): Promise<T> {
    return this._connection.dbSelect(cmd);
  }

  public dbDelete(cmd: string, id: number): Promise<number> {
    return this._connection.dbDelete(cmd, id);
  }

  public dbUpdate(cmd: string, obj: T): Promise<number> {
    return this._connection.dbUpdate(cmd, obj);
  }  

  public dbConnect(): void {
    this._connection.dbConnect()
  }

  public dbClose(): void {
    this._connection.dbClose()
  }
}
