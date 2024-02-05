var a = gsap.timeline()
a.from(".nav h2,.nav h4",{
    y:-10,
    opacity:0,
    duration:0.5,
    delay:1,
    stagger:0.3
})
a.from(".main h1",{
    y:40,
    opacity:0,
     duration:1,
    stagger:0.3,
    opacity:0
})
a.from("#lft,#rt",{
    // scale:2,
    y:22,
    duration:2,
    repeat:-1,
    yoyo:true,
    // stagger:0.3,
    opacity:0
})


a.from(".main h3",{
    y:40,
    opacity:0,
    duration:0.7,
    repeat:-1,
    yoyo:true
})

var x = document.querySelector(".portfolio")
var y = document.querySelector(".bt")
var z = document.querySelector("body")
var h1 = document.querySelector("#h1")
var h2 = document.querySelector("#h2")
var h3 = document.querySelector("#h3")

var val = 0

y.addEventListener("click",function(){
    if(val==0){
    x.style.backgroundColor = "black";
    z.style.backgroundColor = "black";
    z.style.color = "white";
    x.style.color = "white";
    y.innerHTML = "light mode";

    val=1;
    }
    else{

        x.style.backgroundColor = "white";
        z.style.backgroundColor = "white";
        x.style.color = "black";
        z.style.color = "black";
        h1.style.color ="white";
        h2.style.color ="white";
        h3.style.color ="white";
        
        y.innerHTML = "dark mode";
        val=0;
    }


})



