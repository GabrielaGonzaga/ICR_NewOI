
function Auth(e) { 

    document.getElementById("form").style.display = "none";
    let auth = true;
         
    if(auth){
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
        console.log("User  not authenticated")
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
    { transform: 'translateY(-140px)' }
    ], {
    duration: 2400,
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
