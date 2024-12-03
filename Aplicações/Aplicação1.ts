import { Cargo } from "../Pessoas/Cargo";
import { Funcionario } from "../Pessoas/funcionario";

const gerenteCargo = new Cargo("Gerente");
const atendenteCargo = new Cargo("Atendente");

const gerente = new Funcionario("Gabriel", "123.456.789-00", "21988553344", 5300, gerenteCargo);
const atendente = new Funcionario("Igor", "987.654.321-00", "21971545468", 2800, atendenteCargo);

console.log(`${gerente.getNome()} é um ${gerente.getCargo().getNomeCargo()}`);
console.log(`${atendente.getNome()} é um ${atendente.getCargo().getNomeCargo()}`);


