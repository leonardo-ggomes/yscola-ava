export class SalarioMinimoBC{   

    public static async salarioMinimo(): Promise<number>{
        let salarioMinimo: number = 0;

        try{   
            const response: Response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.1619/dados?formato=json')
            const data: Array<any> = await response.json();
    
            if(response.ok){
                salarioMinimo = data.slice(data.length - 1)[0].valor;
            }   
        }
        catch(error){
            console.error(error);
        }

        return salarioMinimo;
          
    }
}

