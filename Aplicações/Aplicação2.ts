import { Cliente } from "../Pessoas/cliente";
import { Endereco } from "../Pessoas/Endereco";

const cliente1 = new Cliente("Carlos Silva", "111.222.333-44", "21 985523214", true, []);
console.log(`Endereços do(a) cliente ${cliente1.getNome()}:`);
cliente1.adicionarEndereco(new Endereco("Rua Brasil", "123", "Casa", "Magé", "RJ", "14525-170"));
cliente1.adicionarEndereco(new Endereco("Rua Espanha", "456", "Casa", "Teresópolis", "RJ", "15125-100"));
cliente1.adicionarEndereco(new Endereco("Rua Chile", "789", "Apartamento 12", "Duque de Caxias", "RJ", "10145-198"));
cliente1.listarEnderecos();


const cliente2 = new Cliente("Beatriz Vidal", "852.321.789-50", "11 974109635", true, []);
console.log(`Endereços do(a) cliente ${cliente2.getNome()}:`);
cliente2.adicionarEndereco(new Endereco("Travessa Pedro Ribeiro", "560", "Casa", "São Paulo", "SP", "01145-100"));
cliente2.adicionarEndereco(new Endereco("Avenida Oscar", "1717", "Apartamento", "São Paulo", "SP", "01190-180"));
cliente2.listarEnderecos();
