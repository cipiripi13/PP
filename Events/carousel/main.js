var current = document.getElementById('current');
var allImages = document.querySelectorAll('.thumb');

//dodeljujemo slikama koje imaju klasu thumb event na klik
//sve slike ce reagovati na klik
//kada kliknemo na sliku ona dolazi na mesto slike sa id current

for(var i=0; i<allImages.length; i++){
    allImages[i].addEventListener('click', display);
}

function display(){
    //kazemo da nam se this odnosi na sliku na koju klikcemo
    var img = this.getAttribute('src');
    // i postavi taj this kliknute slike kao novi src slike sa id-jem current
    current.setAttribute('src', img)
}