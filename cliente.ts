 import { IUsuario } from "./Usuario";
 import { pessoa } from "./Pessoa";
 import { Conta } from "../Contas/Conta"
 import { Endereco } from "./Endereco"; 
 
 export class Cliente extends pessoa implements IUsuario {
   private vip: boolean = false;
   private conta: Conta[] = [];
   private enderecos: Endereco[] = [];
 
   constructor(nome: string, cpf: string, telefone: string, vip: boolean, conta: Conta[]) {
     super(nome, cpf, telefone);
     this.conta = conta;
     this.vip = vip;
   }
 
   autenticar(): boolean {
     return true;
   }
 
   public adicionarEndereco(endereco: Endereco): void {
     this.enderecos.push(endereco);
   }
 
   public listarEnderecos(): void {
     const enderecos = this.getEnderecos();
     
     if (enderecos.length === 0){
        console.log("Endereço não cadastrado");
        return;
     }
     
     enderecos.forEach((endereco) => {
       console.log(`Endereço: ${endereco.toString()}`);
     });
   }
 
   public getEnderecos(): Endereco[] {
     return this.enderecos;
   }
 
   public getConta(): Conta[] {
     return this.conta;
   }
 }
 
 