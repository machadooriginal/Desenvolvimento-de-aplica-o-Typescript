import { Credito } from './Credito';
import { Debito } from './Debito';

export abstract class Conta {
   creditos: Credito[] = [];
   debitos: Debito[] = [];
   numero: string;

  constructor(numero: string) {
    this.numero = numero;
  }

  public getNumero(): string {
    return this.numero;
  }

  public depositar(valor: number): void {
    if (valor <= 0) {
      throw new Error(`Valor deve ser maior que zero`);
    }
    const dataOperacao = new Date();
    const creditado = new Credito(dataOperacao, valor);
    this.creditos.push(creditado);
  }

  public sacar(valor: number): void {
    if (valor <= 0) {
      throw new Error(`Valor deve ser maior que zero`);
    }
    const saldoAtual = this.calcularSaldo();
    if (valor > saldoAtual) {
      throw new Error(`Saldo insuficiente`);
    } else {
      const dataOperacao = new Date();
      const debitado = new Debito(dataOperacao, valor);
      this.debitos.push(debitado);
    }
  }

  abstract calcularSaldo(): number;
}