import Sandwich from './Sandwich'

export default class XBurguer extends Sandwich{
    
    public inserirHamburguer(): void {
        console.log('Hamburguer inserido em seu XBurguer.')
    }

    public inserirQueijo(): void {
        console.log('Queijo inserido em seu XBurguer.')
    }
}