var posjoner = 28 //(antall posjoner)

// ingredienser per posjon
var egg = (5/16);
var sukker = (150/16);
var hvetemel = (150/16);
var bakepulver = (1/16);

var kremflote = (3/16);
var melis = (2/16);
var melkEplejuice = (1/16);
var jordbaersyltetoy = (8/16);
var valnotter = (50/16);
var banan = (1/16);
var jordbaer = (2/16);

// skriver ut ingrediensene per posjon og runder av til neste hele tall
console.log('Ingredienser for ' + posjoner + ' posjoner');
console.log();//(Enter)


console.log('Sukkerbrød:');
console.log();//(Enter)

console.log(Math.ceil(egg * posjoner) + ' stk. egg');
console.log(Math.ceil(sukker * posjoner) + ' g sukker');
console.log(Math.ceil(hvetemel * posjoner) + ' g hvetemel');
console.log(Math.ceil(bakepulver * posjoner) + ' ts bakepulver');
console.log();//(Enter)

console.log('Fyll og pynt:');
console.log();//(Enter)

console.log(Math.ceil(kremflote * posjoner) + ' pk kremfløte');
console.log(Math.ceil(melis * posjoner) + ' ss melis');
console.log(Math.ceil(melkEplejuice * posjoner) + ' dL melk eller eplejuice til dynking');
console.log(Math.ceil(jordbaersyltetoy * posjoner) + ' ss jordbærsyltetøy');
console.log(Math.ceil(valnotter * posjoner) + ' g grovhakkede valnøtter');
console.log(Math.ceil(banan * posjoner) + ' stk. banan i skiver');
console.log(Math.ceil(jordbaer * posjoner) + ' pk jordbær');