import { Conta } from './Conta';


export class ContaCorrente extends Conta {
  limite: number;

  constructor(numero: string, limite: number) {
    super(numero);
    this.limite = limite;
  }


  public calcularSaldo(): number {
    const totalCreditos = this.creditos.reduce((total, credito) => total + credito.valor, 0);
    const totalDebitos = this.debitos.reduce((total, debito) => total + debito.valor, 0);
    return totalCreditos - totalDebitos;
  }

  public transferir(contaDestino: Conta, valor: number): void {
    if (valor <= 0) {
      throw new Error("Valor inválido");
    }

    const saldoDisponivel = this.calcularSaldo();
    if (valor > saldoDisponivel) {
      throw new Error("Saldo insuficiente");
    }

    this.sacar(valor);
    contaDestino.depositar(valor);
  }

  public setLimite(valor: number): void {
    if (valor < 0) {
      throw new Error("O limite não pode ser negativo.");
    }
    this.limite = valor;
  }

  public getLimite(): number {
    return this.limite;
  }
}
