export default abstract class Sandwich {

    public templateMethod(){
        this.inserirPao()
        this.inserirHamburguer()
        this.inserirQueijo()
        this.inserirSalada()
        this.inserirBacon()
    }

    //Feito diretamente na classe abstrata
    public inserirPao(): void{
        console.log('Pão inserido em seu sanduiche.')
    }

    //Obrigatório nas classes concretas
    public abstract inserirHamburguer(): void

    //Hooks
    public inserirQueijo(): void{}

    public inserirSalada():void{}

    public inserirBacon():void{}
}