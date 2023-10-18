import mysql from 'mysql2';
import { IDatabase } from '../../interfaces/database.interface';
import { errors, success } from '../../../utils/messages.utils';

export class DbMySql<T> implements IDatabase<T>{

    protected readonly connection: mysql.Connection;

    constructor(){
        this.connection = mysql.createConnection({database:'dbava', host:'127.0.0.1', password:'', user:'root'})
    }      

    dbInsert(sql: string, obj: T): Promise<any>{

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

    dbSelect(sql: string): Promise<any>{
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

    dbDelete(sql: string, id: number): Promise<any>{
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

    dbUpdate(sql:string, obj: T): Promise<any>{
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

    dbConnect(): void {
        this.connection.connect((err) => {
          if (err) {
            console.error(errors.dbconnection, err);
          } else {
            console.log(success.dbconnection);
          }
        });
    }

    dbClose(): void {
        this.connection.end((err) => {
            if (err) {
                console.error(errors.dbconnection, err);
            } else {
                console.log(success.dbconnection);
            }
        });
      }
}