import * as dotenv from "dotenv";
import { Connection } from 'mysql2';
import { IDatabase } from '../interfaces/database.interface';
import { errors, success } from '../../../utils/messages.utils';
dotenv.config();

export class DbMySql<T> implements IDatabase<T>{

    protected readonly connection: Connection;

    constructor(connection: Connection){
        this.connection = connection;
    }      

    public dbInsert(sql: string, params: Array<any>): Promise<any>{

        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, (err, results: any) => {
              if (err) {
                reject(err);
              } else {
                resolve(results.insertId);
              }
            });
        });

    }

    public dbSelect(sql: string, params: Array<any>): Promise<any>{
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
        });

    }

    public dbDelete(sql: string, params: Array<any>): Promise<any>{
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
        });

    }

    public dbUpdate(sql:string, params: Array<any>): Promise<any>{
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
        });

    }

    public dbConnect(): void {
        this.connection.connect((err) => {
          if (err) {
            console.error(errors.dbconnection, err);
          } else {
            console.log(success.dbconnection);
          }
        });
    }

    public dbClose(): void {
        this.connection.end((err) => {
            if (err) {
                console.error(errors.dbconnection, err);
            } else {
                console.log(success.dbconnection);
            }
        });
    }
}