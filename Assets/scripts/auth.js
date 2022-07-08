
const form = document.getElementById('form').onsubmit = Auth;

function Auth(e) { 

    const userName = document.querySelector('input[name="user"]').value;
    const password = document.querySelector('input[name="pwd"]').value;

    let response;
    const baseUrl = 'http://localhost:3333';
    
    fetch(baseUrl + "/sessions", {
        method: "POST",
        headers: {"Content-Type":" application/json; charset=UTF-8"},
        body: JSON.stringify({
            email: userName,
            password: password
        })
      }).then( function (response){
        return response
    }).then( function (apiResponse){
        // console.log(apiResponse);
        response = apiResponse
    }).catch(function(error) {
        console.log('NOP :(');
    });

    setTimeout(() => {
        // console.log(response);    
        if(response.status == 200){
            AuthAction()
          }
          else{
              StopAction()
          }
          
    }, 80);
} 

function AuthAction(){
    document.getElementById("form").style.display = "none";
    document.getElementById("load").style.display = "block";
    Animation();

    window.setTimeout(function() {
        window.location.replace("../DashBoard/index.html");
    }, 2100);
}

function StopAction(){
    document.getElementById("form").style.display = "none";
    document.getElementById("load").style.display = "block";
    Animation();

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
    }, 2300);
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