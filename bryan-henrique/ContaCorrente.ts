import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { IConta } from "./IConta";

export class ContaCorrente implements IConta{
    deposito : number;
    saque : number;
    transferencia : number;
    saldo : number;
    contas: Conta[] = [];
    
    constructor(deposito:number, saque: number, transferencia:number){
        this.deposito = deposito;
        this.saque = saque;
        this.transferencia = transferencia;
    }

    sacar(): void{
        this.saldo = this.saldo - this.saque;
    }

    Depositar(): void{
        this.saldo = this.saldo + this.deposito;
    }

    cadastrarContaCorrente(contas: Conta, Cliente, ContasdoCliente: Conta){
        if(Cliente.renda >= 500){
            Cliente.ContasdoCliente.push(Conta);
        }
        
    }
}