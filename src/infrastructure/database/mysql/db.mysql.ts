import * as dotenv from "dotenv";
import mysql from 'mysql2';
import { IDatabase } from '../interfaces/database.interface';
import { errors, success } from '../../../utils/messages.utils';
dotenv.config();

export class DbMySql<T> implements IDatabase<T>{

    protected readonly connection: mysql.Connection;

    constructor(){
        this.connection = mysql.createConnection({database: process.env.DATABASE, host: process.env.HOST, password: process.env.PASSWORD, user: process.env.USER})
    }      

    public dbInsert(sql: string, obj: T): Promise<any>{

        return new Promise((resolve, reject) => {
            this.connection.query(sql, obj, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
        });

    }

    public dbSelect(sql: string): Promise<any>{
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
        });

    }

    public dbDelete(sql: string, id: number): Promise<any>{
        return new Promise((resolve, reject) => {
            this.connection.query(sql, id, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve(results);
              }
            });
        });

    }

    public dbUpdate(sql:string, obj: T): Promise<any>{
        return new Promise((resolve, reject) => {
            this.connection.query(sql, obj, (err, results) => {
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