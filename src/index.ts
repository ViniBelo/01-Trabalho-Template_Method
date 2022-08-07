import XSalada from './Sandwiches/XSalada'
import XBacon from './Sandwiches/XBacon'
import XBurguer from './Sandwiches/XBurguer'

const lanche1 = new XSalada();

lanche1.inserirPao()
lanche1.inserirHamburguer()
lanche1.inserirQueijo()
lanche1.inserirSalada()


console.log()
const lanche2 = new XBacon()

lanche2.inserirPao()
lanche2.inserirHamburguer()
lanche2.inserirQueijo()
lanche2.inserirBacon()


console.log()
const lanche3 = new XBurguer()

lanche3.inserirPao()
lanche3.inserirHamburguer()
lanche3.inserirQueijo()