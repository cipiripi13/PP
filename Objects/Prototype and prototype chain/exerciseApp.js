// zajednicka svojstva za obe fje

function AllApps (name, licence, stars){
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

// da li je aplikacija cc
AllApps.prototype.isCCLicence = function(){
    return this.licence === 'cc';
}
// fja likes koja povecava zvezdice za jednu
AllApps.prototype.likes = function(){
    return this.stars++;
}
// prikazuje broj zvezdica fja
AllApps.prototype.showStars = function(){
    console.log(this.stars);
}



function WebApp (name, url, technologies, licence, stars){
   AllApps.call(this,name, licence, stars );
   this.url = url;
   this.technologies = technologies;
   
}
WebApp.prototype = Object.create(AllApps.prototype);
WebApp.prototype.constructor = WebApp;

//kreiranje funkcije
WebApp.prototype.getData = function(){
    console.log(`The name of app is ${this.name},  ${this.licence}, an it has ${this.stars} stars`);
}
WebApp.prototype.reacBased = function(technologies){
    if(this.technologies === 'React'){
        console.log(`Yes, this is React app`);
    }else{
        console.log(`No, this is not an React app`);
    }
}





function MobileApp (name, platform, licence, stars){
    AllApps.call(this, name, licence, stars);
    this.platform = platform;
}
MobileApp.prototype.getData = function(){
    console.log(`The name of app is ${this.name},  ${this.licence}, an it has ${this.stars} stars`);
}
MobileApp.prototype.forAndroid = function(technologies){
    if(this.technologies === 'Android'){
        console.log(`Yes, this is android app`);
    }else{
        console.log(`No, this is not an adroid app`);
    }
}



var firstWebApp = new WebApp("GoogleMaps", "www.googlemaps.com","React","CC",3);
console.log(firstWebApp);
firstWebApp.reacBased();
firstWebApp.getData();

var firstMobileApp = new MobileApp('To do app', 'www.todoapp.com', 'good', 4);
console.log(firstMobileApp);

var app = new AllApps('beauty app', 'cc', 4);
console.log(app);
app.likes();
console.log(app.licence);
console.log(app.isCCLicence());

