
function Auth(e) { 

    document.getElementById("form").style.display = "none";
    let auth = true;
         
    if(!auth){
        document.getElementById("load").style.display = "block";
        document.getElementById("load").style.transition = "1s";
        document.getElementById("load").style.opacity = "1";
        Animation();
    
        // if = true, DashBoard href
        window.setTimeout(function() {
            window.location.replace("http://127.0.0.1:5500/Pages/DashBoard/index.html");
        }, 2200);
   
        console.log("User authenticated")
    }
    else{
        document.getElementById("load").style.display = "block";
        document.getElementById("load").style.transition = "1s";
        document.getElementById("load").style.opacity = "1";
        Animation();
    
        // if = true, DashBoard href
        window.setTimeout(function() {
            document.getElementById("load").style.display = "none";
            document.getElementById("content").style.paddingTop = "5rem";
            document.getElementById("backg").style.display = "none";
            document.getElementById("spin").style.marginBottom = "3rem";
            document.getElementById("logo_ICR").style.display = "none";
            document.getElementById("loadStop").style.display = "flex";
            document.getElementById("loadStop").style.display = "flex";
            document.getElementById("loadStop").style.padding = " 3rem"

        }, 2300);

        window.setTimeout(function() {
            document.getElementById("spin").style.display = "none";
            document.getElementById("no-auth").style.display = "block";
        }, 2350);
    }
    
} 

function Animation (e){

    const background = document.getElementById("backg");
    const logoIcr = document.getElementById("logo_ICR");
    const logoNewIO = document.getElementById("logo");
    const load = document.getElementById("load");    

    background.style.opacity = "0.9"
    load.style.opacity= "1"

    background.animate([
    { transform: 'translateY(10px)' },
    { transform: 'translateY(-10)' },
    { transform: 'scale(1.8)' },
    ], {
    duration: 2300,
    iterations: 1
    });

    background.style.animationDuration = "400ms";

    logoIcr.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-120px)' }
    ], {
    duration: 2300,
    iterations: 1
    });

    logoNewIO.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(50px)'}
    ], {
    duration: 2300,
    iterations: 1
    });

    load.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(50px)' }
    ], {
    duration: 2300,
    iterations: 1
    });
}