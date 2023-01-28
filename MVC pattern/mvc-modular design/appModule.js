(function(calculation, labels){
    var result = calculation.sum(10,15);
    var resultLabel = labels.getResultLabel();

    console.log(resultLabel + result); // ovde su imena promenljivih smestene
})(module1, module2);