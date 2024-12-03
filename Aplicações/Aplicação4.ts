import { contaPoupança } from "../Contas/poupança";
import { ContaCorrente } from "../Contas/contaCorrente";
import { Cliente } from "../Pessoas/cliente";

const contacorrente2 = new ContaCorrente("1234-2", 0);
const cliente4 = new Cliente("Andressa Gomes", "258.123.987-60", "51 985236974", true, [contacorrente2]);
console.log(`Conta do(a) cliente ${cliente4.getNome()}:`);
contacorrente2.depositar(1000);
console.log("Saldo Conta Corrente:", contacorrente2.calcularSaldo());


const poupança = new contaPoupança("1234-3");
const cliente5 = new Cliente("João Marcos", "528.213.879-90", "51 969026602", true, [poupança]);
console.log(`Conta do(a) cliente ${cliente5.getNome()}:`);
poupança.depositar(1000);
console.log("Saldo Conta Poupança:", poupança.calcularSaldo());

contacorrente2.transferir(poupança, 500);

console.log(`Conta do(a) cliente ${cliente4.getNome()}:`);
console.log("Saldo Conta Corrente:", contacorrente2.calcularSaldo());
console.log(`Conta do(a) cliente ${cliente5.getNome()}:`);
console.log("Saldo Conta Poupança:", poupança.calcularSaldo());

