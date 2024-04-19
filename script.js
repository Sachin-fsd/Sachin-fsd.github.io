// window.addEventListener("load",()=>{
//     document.querySelector(".load").style.display = "none"
// })


let resumes = document.querySelectorAll(".resumepage");
for(let elem of resumes){
    elem.addEventListener("click",()=>{
        window.open("https://drive.google.com/file/d/1ubmgGm7E0qQkaZ9VTvnM8BC4mgLAhrub/view?usp=sharing","_blank");
    })        
}

function resume(){
    window.open("https://drive.google.com/file/d/1ubmgGm7E0qQkaZ9VTvnM8BC4mgLAhrub/view?usp=sharing","_blank");
}

function resume2(){
    console.log("Hello")
    window.open("https://drive.google.com/file/d/1ubmgGm7E0qQkaZ9VTvnM8BC4mgLAhrub/view?usp=sharing","_blank");
}

let gitimages = document.querySelectorAll(".github img")
for(let elem of gitimages){
    elem.addEventListener("click",()=>{
        window.open("https://github.com/Sachin-fsd","_blank")
    })
}

let scrollarea = document.querySelector(".scrollarea");

let menu = document.querySelector(".menu");
let anchors = document.querySelectorAll(".nav>div:nth-child(3) a");
let anchordiv = document.querySelector(".nav>div:nth-child(3)>div")
menu.addEventListener("click",()=>{
    if(anchordiv.style.display == "none"){
         anchordiv.style.display = "block";
    }
    else{
        anchordiv.style.display = "none";
    }
})

let divs = document.querySelectorAll(".scrollarea>div:not(.nav)")
for(let elem of divs){
    elem.addEventListener("click",()=>{
        if(window.innerWidth < 820){
            for(let elem of anchors){
                anchordiv.style.display = "none"
            }
        }
    })
}

for(let elem of anchors){
    elem.addEventListener("click",()=>{
        if(window.innerWidth < 820){
            anchordiv.style.display = "none";
        }
    })
}


if(window.innerWidth < 870){
    document.querySelector(".gmail").innerText = "s...@gmail.com"
}

document.querySelector('.home-section>div>img').addEventListener('click',() => {
    window.location.href = "https://Sachin-fsd.gthub.io#about"
})