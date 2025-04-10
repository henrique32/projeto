import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";


const conta = new Conta(200,50,10);
const cliente = new Cliente("Carlos", 1, "Rua Legal", 47998901495, 600 );

conta.cadastrarCliente(cliente);

const contaCorrente = new ContaCorrente(200,100,50);
const contaPoupanca = new ContaPoupanca(500,400,50, 0.6);
