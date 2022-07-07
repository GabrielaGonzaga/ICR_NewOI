function Animation (e){

    const background = document.getElementById("backg");
    const logoIcr = document.getElementById("logo_ICR");
    const logoNewIO = document.getElementById("logo");
    const load = document.getElementById("load");    

    background.style.opacity = "0.9"
    load.style.opacity= "1"

    background.animate([
    // keyframes
    { transform: 'translateY(10px)' },
    { transform: 'translateY(-10)' },
    { transform: 'scale(1.7)' },
    ], {
    // timing options
    duration: 2300,
    iterations: 1
    });

    background.style.animationDuration = "400ms";

    logoIcr.animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-150px)' }
    ], {
    // timing options
    duration: 2300,
    iterations: 1
    });

    logoIcr.animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-150px)' }
    ], {
    // timing options
    duration: 2300,
    iterations: 1
    });

    logoNewIO.animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(30px)'}
    ], {
    // timing options
    duration: 2300,
    iterations: 1
    });

    load.animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(30px)' }
    ], {
    // timing options
    duration: 2300,
    iterations: 1
    });
}

export default Animation;