import Sandwich from "./Sandwich";

export default class XBacon extends Sandwich{
    public inserirPao(): void {
        console.log('Pão inserido em seu XBacon.')
    }

    public inserirHamburguer(): void {
        console.log('Hamburguer inserido em seu XBacon.')
    }

    public inserirQueijo(): void {
        console.log('Queijo inserido em seu XBacon.')
    }

    public inserirBacon(): void {
        console.log('Bacon inserido em seu XBacon.')
    }
}