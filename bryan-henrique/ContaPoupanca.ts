import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { IConta } from "./IConta";

export class ContaPoupanca implements IConta{
    deposito : number;
    saque : number;
    transferencia : number;
    taxaJuros : number;
    saldo : number;
    contas: Conta[] = [];

    constructor(deposito:number, saque: number, transferencia:number, taxaJuros:number){
        this.deposito = deposito;
        this.saque = saque;
        this.transferencia = transferencia;
        this.taxaJuros = taxaJuros;
    }

   

    sacar(): void{
        this.saldo = this.saldo - this.saque;
    }

    Depositar(): void{
        this.saldo = this.saldo + this.deposito;
    }

    calcularTaxa(): void{

    }

    cadastrarContaPoupanca(contas: Conta, Cliente, ContasdoCliente: Conta){
        if(Cliente.renda<500){
            Cliente.ContasdoCliente.push(Conta);
        }
    }
}