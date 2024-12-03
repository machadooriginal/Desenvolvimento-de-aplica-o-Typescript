export class Cargo {
    private nomeCargo: String

    constructor(nomeCargo: String){
        this.nomeCargo = nomeCargo;
    }

    public getNomeCargo(): String {
        return this.nomeCargo;
    }

}
