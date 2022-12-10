// constructor functiones

function Recipe(n, ct, cm, ing, t, ins) {
    {
      this.name = n;
      this.cuisineType = ct;
      this.complexity = cm;
      this.ingridients = ing;
      this.time = t;
      this.instructions = ins;
      this.printIng = function () {
        console.log(this.ingridients);
      },
      this.checkIsUnder15Min = function () {
        return recipe.time < 15;
      };
      this.changeCuisineType = function (newCuisineType) {
        this.cuisineType = newCuisineType;
      };
      this.deleteIngridient = function (ingredient) {
        var updatedIngredients = [];
        for (var i = 0; i < this.ingridients.length; i++) {
          if (this.ingridients[i] !== ingredient) {
            updatedIngredients[updatedIngredients.length] = this.ingridients[i];
          }
        }
        this.ingridients = updatedIngredients;
      }
    }
   
  }

 var p = new Recipe('paprikas', 'madjarska kuhinja', 2, ['paprike', 'luk', 'biber'], 60, 'sipati vodu u lonac...');
//   console.log(p);
//   p.printIng();
//   p.changeCuisineType('mediteranska kuhinja')
//   console.log(p);
//   p.deleteIngridient('luk');
//   console.log(p);

  console.log(p instanceof Recipe);  // leva strana objekat ---- desna konstruktorska f-ja
  console.log(p instanceof Object);   

  //console.log(Recipe instanceof Object); // ne moze
  // jer proveravamo konstruktorsku funkciju unutar druge k.f-je


  // pretvaranje objekta u string

  var strinObject = JSON.stringify(p);
  console.log(strinObject);   // objekat preveden u string

  var c = JSON.parse(strinObject);
  console.log(c);          // string prevodimo u objekat  // nije dobar kod objekata koji imaju metode da se radi



  //primer sa casa
  //referentno uporedjivanje

  var original = {
    howmany: 100
  }

  function prevediUnulu (objekat){
    objekat.howmany = 0;
  }
  prevediUnulu(original);
  console.log(original);  // sada ima vrednost NULA

  console.log(original.howmany);  //  0



  /* ****************************************************************************** */

  var noviObj = {
    vrednost: 1
  }

  var noviObj2 = {
    vrednost: 1
  }

  console.log(noviObj == noviObj2);   //vraca false
  // naizgeld isto ali imaju razlicitu referencu

  var noviObj3 = noviObj;
  console.log(noviObj3 == noviObj);  //true
  // jer sada imaju istu referencu

  console.log(noviObj instanceof Object);  //true