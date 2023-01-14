function AllApps (stars){
    this.stars = stars;
}
AllApps.prototype.getData = function(){
    console.log(`The name of app is ${this.name}, the adress is ${this.url}, ${this.technologies}, ${this.licence}, ${this.stars}`);
}



function WebApp (name, url, technologies, licence, stars){
    this.name = name;
    this.url =url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;


}

function MobileApp (name, platform, licence, stars){
    this.name = name;
    this.platform = platform;
    this.licence= licence;
    this.stars = stars;
}