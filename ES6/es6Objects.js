// Enhanced Object Literals

const firstName = 'katarina';
const id = 33;

const user = {
    name: firstName,
    id: id,
    sayHello : function(){
        return `Hello ${this.name}`
    }
};
console.log(user);
console.log(user.sayHello());
// ovo je bio stari nacin

// novi nacin, gde je key u kome prepisujemo vrednosti isti sa onim iz kog prepisujemo
// skracujemo pisanje koda na sl nacin

let user1 = {       // let user 1 = {
    firstName,      // firstName: firstName,
    id ,             // id: id       }   
    sayHello(){        // i ovde smo skratili pisanje kod metoda, videli vec kod klasa
        return `Hello ${this.firstName}`
    }
}
console.log(user1);
console.log(user1.sayHello());
