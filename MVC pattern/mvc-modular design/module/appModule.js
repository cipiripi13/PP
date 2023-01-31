(function(calculation, labels){
    var result = calculation.sum(10,15);
    var resultLabel = labels.getResultLabel();
    var treciRezlta = labels.oduzimanjeTekst() + calculation.oduzimanje(6,4);

    console.log(resultLabel + result); // ovde su imena promenljivih smestene
    console.log(treciRezlta);
  
})(module1, module2);