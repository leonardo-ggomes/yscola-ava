export class Email{

    private email: String;

    constructor(email: string){
        this.email = email;

        if(!this.email.match(/^[\w\.-]+@[\w\.-]+\.\w+$/)){
            throw Error("Input isn't a valid format.")
        }
        
    }

}