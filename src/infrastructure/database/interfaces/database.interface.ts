export interface IDatabase<T>{
    dbInsert(cmd: string, obj: T): Promise<number>,
    dbSelect(cmd: string): Promise<T>;
    dbDelete(cmd: string, id: number): Promise<number>;
    dbUpdate(cmd: string, obj: T): Promise<number>;    
    dbConnect(): void;
    dbClose(): void;
}