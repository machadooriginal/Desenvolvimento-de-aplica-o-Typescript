export class Debito {
  public valor: number;
  public data: Date;

    constructor( data: Date, valor: number) {
      this.valor = valor;
      this.data = data
    }
  }