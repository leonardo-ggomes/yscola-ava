export interface IDatabase<T>{
    dbInsert(cmd: string, params: Array<any>): Promise<number>,
    dbSelect(cmd: string, params: Array<any>): Promise<T>;
    dbDelete(cmd: string, params: Array<any>): Promise<number>;
    dbUpdate(cmd: string, params: Array<any>): Promise<number>;    
    dbConnect(): void;
    dbClose(): void;
}