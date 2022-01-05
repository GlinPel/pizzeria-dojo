const pizza = {
    tipoCorteza: "",
    tipoSalsa: "",
    quesos: [],
    salsas: []
};


function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    const pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
const pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);
const pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"],["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);
const pizza3 = pizzaOven("super crigiente" , "norteña" , ["de corte"],["picante"]);
console.log(pizza3);
const pizza4 = pizzaOven("blanda" , "aji rocoto" , ["gouda"], ["pepperoni", "champiñones", "aceitunas", "cebollas", "salchicha"]);
console.log(pizza4);

