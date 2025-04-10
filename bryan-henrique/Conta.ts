import { Cliente } from "./Cliente";
import { IConta } from "./IConta";

export class Conta implements IConta{
    deposito : number;
    saque : number;
    transferencia : number;
    clientes: Cliente[] = [];
    contas: Conta[] = [];
    

    constructor(deposito:number, saque:number, transferencia:number){
        this.deposito = deposito;
        this.saque = saque;
        this.transferencia = transferencia;
    }
    
    verrificarSaldo(): void {
        console.log(``)
    }

    cadastrarCliente(clientes: Cliente){
        this.clientes.push(clientes);
    }

    
    
        cadastrarContaCorrente(contas: Conta, Cliente, ContasdoCliente: Conta){
            if(Cliente.renda >= 500){
                Cliente.ContasdoCliente.push(Conta);
            }
            
        }

        cadastrarContaPoupanca(contas: Conta, Cliente, ContasdoCliente: Conta){
            if(Cliente.renda<500){
                Cliente.ContasdoCliente.push(Conta);
            }
        }
    
    
    
}