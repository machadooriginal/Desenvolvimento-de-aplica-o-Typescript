import { pessoa } from "./Pessoa";
import { IUsuario } from "./Usuario";
import { Cargo } from "./Cargo";

export class Funcionario extends pessoa implements IUsuario {
  private cargo: Cargo;
  private salario: number;
  
  constructor(nome: string, cpf: string, telefone: string, salario: number, cargo: Cargo) {
    super(nome, cpf, telefone);
    this.salario = salario;
    this.cargo = cargo;
  }

  public autenticar(): boolean {
    return true;
  }

  public getCargo(): Cargo {
    return this.cargo;
  }

}