function AllApps (name, licence, stars){
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
AllApps.prototype.getData = function(){
    console.log(`The name of app is ${this.name},  ${this.licence}, an it has ${this.stars} stars`);
}

AllApps.prototype.isCCLicence = function(){
    return this.licence === 'CC';
}

AllApps.prototype.likes = function(){
    return this.stars++;
}
AllApps.prototype.showStars = function(){
    console.log(this.stars);
}



function WebApp (name, url, technologies, licence, stars){
   AllApps.call(this,name, licence, stars );
   this.url = url;
   this.technologies = technologies;
   
}
WebApp.prototype.getData = function(){
    console.log();
}

function MobileApp (name, platform, licence, stars){
    AllApps.call(this, name, licence, stars);
    this.platform = platform;
}