const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Mapiranje niza
//vraca niz uvek sa istim brojem clanova
//clanovi se mapiraju, tako da se vraca promenjen originalni niz
 const mappedArray = originalArray.map(function(number){
    return number + 100;
 });
 console.log(mappedArray);   //[101, 102, 103, 104,105, 106, 107, 108,109, 110]

 const mappedArr1 = originalArray.map(function(number){
    return 'cao';
 })
 console.log(mappedArr1);  //[10x cao u nizu]

 const mappedArr2 = originalArray.map(function(number){

 });
 console.log(mappedArr2);  // u ovoj petlji nema return
 // [ niz sa 10x undefined]
 //jer fja nista ne vraca, prodje kroz svih 10 clanova niza i za svaki ne vraca nista

/*************************************************************************************************************/

//FILTER 
// filtrira niz po nekom uslovu
// ono sto ce biti clan novog niza bice samo ako je true tj.ako zadovoljava uslov

const filteredArr = originalArray.filter(function(number){
    return number%2 === 0;
})
console.log(filteredArr);  //[ 2, 4, 6, 8, 10 ]

const filteredArr1 = originalArray.filter(function(number){

});
console.log(filteredArr1); //[]
// nema nikakvog uslova po kome se radi filtriranje i vratice prazan niz

const fArr = originalArray.filter(function(number){
    return 'cao';
})
console.log(fArr);  //  1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
/*************************************************************************************************************/

//SOME
//vraca boolean vrednosti = true ili false
// ako je samo jedan uslov zadovoljen vratice true
var isConditionTrue = originalArray.some(function(number){
    return number === 100;
});
console.log(isConditionTrue);  //false

isConditionTrue = originalArray.some(function(number){
    return number === 5;
})
console.log(isConditionTrue);  //true

/**********************************************************************************************************/

//EVERY
// nad svakim clanom uslov mora da bude zadovoljen da bi vratio true

isConditionTrue = originalArray.every(function(number){
    return number<=10;
})
console.log(isConditionTrue); //true

isConditionTrue = originalArray.every(function(number){
    return (typeof number === 'number')
});
console.log(isConditionTrue); //true

isConditionTrue = originalArray.filter(function(){
    return false;
})
console.log(isConditionTrue); //[];

isConditionTrue = originalArray.every(function(number){
    return `${number}.length === 1`;
})
console.log(isConditionTrue);  //
