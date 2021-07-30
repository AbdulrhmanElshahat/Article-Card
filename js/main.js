let shareBtn = document.querySelector(".share-icon"),
    links = document.querySelector(".share-links");
shareBtn.onclick = function(){
    links.classList.toggle('show')
    this.classList.toggle("opened")
}