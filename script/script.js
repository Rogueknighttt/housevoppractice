let navbarBlocks = document.getElementsByClassName("in-page1__topbar__navbar__block");
for (let i=0; i<navbarBlocks.length; i++){
    navbarBlocks[i].addEventListener('click', ()=> {
        switch(i){
            case 0:
                document.querySelector(".page1").scrollIntoView({behavior: "smooth", block: "start"});
            break
            case 1:
                document.querySelector(".testimonials").scrollIntoView({behavior: "smooth", block: "center"});
            break
            case 2:
                document.querySelector(".apartments").scrollIntoView({behavior: "smooth", block: "start"});
            break
            case 3:
                document.querySelector(".maps").scrollIntoView({behavior: "smooth", block: "center"});
            break
            case 4:
                document.querySelector(".footer").scrollIntoView({behavior: "smooth", block: "center"});
            break
        }
    })
}
let navbar = document.querySelector(".in-page1__topbar__navbar");
let navbarTopbarBtn = document.getElementById("in-page__topbar__btn");
document.querySelector(".in-page1__topbar__btn").onclick = ()=> {
    if(navbar.style.display == "flex"){
        navbarTopbarBtn.classList.add("prevent");
        navbarTopbarBtn.classList.toggle("close");
        anime({
            targets: ".in-page1__topbar__navbar",
            height: "0px",
            duration: 500,
            easing: "linear"
        });
        let animePromise1 = new Promise((resolve,reject) => {
            setTimeout(() => {       
                resolve("result");
            }, 500)
        });
        animePromise1.then(
            result => {
                navbar.style.display = "none";
                navbarTopbarBtn.classList.remove("prevent");
            }
        );
    } else{
        navbarTopbarBtn.classList.add("prevent");
        navbar.style.display = "flex";
        navbarTopbarBtn.classList.toggle("close");
        let animePromise2 = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve("result")
            }, 500)
        })
        anime({
            targets: ".in-page1__topbar__navbar",
            height: "343px",
            duration: 500,
            easing: "linear"
        });
        animePromise2.then( 
            result => {
                navbarTopbarBtn.classList.remove("prevent");
            }
        );
    }
}