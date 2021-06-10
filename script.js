
const eachAlbumBadge = function(){

    albumGerne = document.getElementsByClassName("album-gerne")

    albumGerne.forEach(function() {
        
        gerneText = albumGerne.innerHTML
    
        let spanELement = document.createElement("span")

    spanELement.classList.add("badge badge-dark")
    let gerne = document.createTextNode(gerneText)
    albumGerne += gerne
    });
}
eachAlbumBadge();


for album-gerne in fav-albums