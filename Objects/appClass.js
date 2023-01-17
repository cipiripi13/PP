class App {
    constructor(name, licence, stars){
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    getDataApp(){
        console.log(`The name of app is ${this.name},  ${this.licence}, an it has ${this.stars} stars`);
    }
    isCClicence(){
        return this.licence = 'cc';
    }
    showStars(){
        return this.stars;
    }
};

class WebApp extends App{
    constructor(name, url, technologies, licence, stars){
        super(name, licence, stars);
        this.url = url;
        this.technologies = technologies;
    }

    //zasto vraca undefined???
    getData(){
        
            super.getDataApp();
        
    }
    reactBased(){
        if(this.technologies === 'React'){
            return true;
        } else{
            return false;
        }
    }
}

class MobileApp extends App {
    constructor(name, platform, licence, stars){
        super(name, licence, stars);
        this.platform = platform;
    }
    getDataMobile(){
        console.log(`The name of app is ${this.name},  ${this.licence}, an it has ${this.stars} stars`);
    }
    forAndroid(){
        if(this.platform === "Android"){
            return true;
        } else{
            return false;
        }
    }
}

var firstWebApp = new WebApp("GoogleMaps", "www.googlemaps.com","React","CC",3);
console.log(firstWebApp);
console.log(firstWebApp.reactBased());
firstWebApp.getData(); 

var firstMobileApp = new MobileApp('To do app', 'www.todoapp.com', 'good', 4);
console.log(firstMobileApp);
firstMobileApp.getDataMobile();