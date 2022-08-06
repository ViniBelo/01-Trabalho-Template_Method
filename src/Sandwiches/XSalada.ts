import Sandwich from "./Sandwich";

export default class XSalada extends Sandwich{
    public inserirPao(): void {
        console.log('Pão inserido em seu XSalada.')
    }

    public inserirHamburguer(): void {
        console.log('Hamburguer inserido em seu XSalada.')
    }

    public inserirQueijo(): void {
        console.log('Queijo inserido em seu XSalada.')
    }

    public inserirSalada(): void {
        console.log('Salada inserido em seu XSalada.')
    }
}