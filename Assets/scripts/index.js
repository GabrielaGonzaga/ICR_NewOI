function profileConfig() {

    var display = document.getElementById('profileNavigation').style.display || 'none';
    
    const animation = document.getElementById('animation');

    if (display === 'none') {
        document.getElementById('profileNavigation').style.display = 'block';
        animation.style.transform = 'rotate(180deg)';
        animation.style.transition = '0.5s';
    } else {
        document.getElementById('profileNavigation').style.display = 'none';
        animation.style.transform = 'rotate(0deg)';
    }


}

function openClose() {

    const btn = document.getElementsByClassName('openClose').style.display || 'block';

    const openClose = document.getElementsByClassName('openClose');

    if (btn === 'block') {
        openClose.style.width = '1000px'
    }

}