import { ContaCorrente } from "../Contas/contaCorrente";
import { Cliente } from "../Pessoas/cliente";


const contacorrente1 = new ContaCorrente("1234-1", 0);
contacorrente1.depositar(100);
contacorrente1.depositar(100);
contacorrente1.depositar(100);
contacorrente1.sacar(50); 
const cliente = new Cliente("Carlos Silva", "111.222.333-44", "21 985523214", true, [contacorrente1]);
console.log(`Conta do(a) cliente ${cliente.getNome()}:`);

console.log("Saldo Conta Corrente:", contacorrente1.calcularSaldo());