let show = document.querySelector(".showmore");
show.addEventListener("click",showmore)

function showmore(){
    let dd = document.querySelector(".hide")
    dd.style.display = "block";
}

let hide = document.querySelector(".closemore")
hide.addEventListener("click",close)

function close(){

    let dd = document.querySelector(".hide")
    dd.style.display = "none";
    
}