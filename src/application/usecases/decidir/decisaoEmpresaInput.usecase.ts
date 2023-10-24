export interface DecisaoEmpresaInput{
    empresaId: number;
    produtos: {produtoId: number, preco: number, quantidade: number}[];
    funcionarios: {quantidade: number}[];
    dividas: {nome: string, totalParcelas: number, valor: number}[];

}