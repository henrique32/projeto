import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

const conta = new Conta(200,50,10);
const cliente = new Cliente("Carlos", 1, "Rua Legal", 47998901495, 600 );

conta.cadastrarCliente(cliente);