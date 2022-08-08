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

lanche2.templateMethod()


console.log()
const lanche3 = new XBurguer()

lanche3.templateMethod()