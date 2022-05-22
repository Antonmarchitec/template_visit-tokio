let container_socialMedia = document.querySelector("#container_socialMedia")
let btnTop = document.querySelector("#btnTop")




document.addEventListener("scroll", () =>{
    let posScroll = document.documentElement.scrollTop
    console.log(posScroll)
    let posElement = container_socialMedia.offsetTop
    console.log(posElement)  //300


    if(posScroll >= posElement){
        container_socialMedia.classList.add("container_socialMedia_JS")
        btnTop.classList.add("btnTop_JS")
    }else{
        container_socialMedia.classList.remove("container_socialMedia_JS")
        btnTop.classList.remove("btnTop_JS")
    }
})