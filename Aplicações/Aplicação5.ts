import { ContaCorrente } from "../Contas/contaCorrente";
import { Cliente } from "../Pessoas/cliente";

const contacorrente3 = new ContaCorrente("1234-4", 100);
const cliente6 = new Cliente("Beatriz Vidal", "852.321.789-50", "11 974109635", true, [contacorrente3]);
console.log(`Conta do(a) cliente ${cliente6.getNome()}:`);
contacorrente3.setLimite(100);
contacorrente3.depositar(300);
console.log("Limite da Conta Corrente :", contacorrente3.getLimite());
console.log("Saldo Conta Corrente :", contacorrente3.calcularSaldo());

const contacorrente4 = new ContaCorrente("1234-5", 0);
const cliente7 = new Cliente("Almir Senna", "961.521.852-20", "11 985453525", true, [contacorrente4]);
console.log(`Conta do(a) cliente ${cliente7.getNome()}:`);
contacorrente4.depositar(100);
console.log("Saldo Conta Corrente:", contacorrente4.calcularSaldo());

try {
    contacorrente3.transferir(contacorrente4, 1000);
  } catch (error: any) {
    console.error("Transferência Inválida");
  }