import { Conta } from "./Conta";
import { IClientes } from "./ICliente";

export class Cliente implements IClientes{
    nome : string;
    id : number;
    endereco : string;
    numeroTelefone : number;
    renda : number;
    ContasdoCliente: Conta[] = [];
    

    constructor(nome:string, id:number, endereco:string, numeroTelefone:number, renda:number){
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.numeroTelefone = numeroTelefone;
        this.renda = renda;
    }

    
}