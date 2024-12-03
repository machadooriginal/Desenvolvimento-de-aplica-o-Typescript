export abstract class pessoa {
  private cpf: String
  private nome: String
  private telefone: String;

    constructor(public Nome: String, public Cpf: String, public Telefone: String) {
      this.cpf = Cpf;
      this.nome = Nome;
      this.telefone = Telefone;
    }

    public getNome(): String{
      return this.nome;
    }
  }
  