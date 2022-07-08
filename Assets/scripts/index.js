
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

function openCloseNotification() {
    const textNotification = document.getElementById('notificationBar');
    const textNotification2 = document.getElementById('notificationBar2');
    const teste = document.getElementById('nav');

    const textNot = document.getElementById('text3');
    const imgNot = document.getElementById('imgNot');
    const iconNot = document.getElementById('iconNot');

    const animation = document.getElementById('animation2');

    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');
    const text5 = document.getElementById('text5');
    const text6 = document.getElementById('text6');
    const text7 = document.getElementById('text7');
    const nav = document.getElementById('navigation');

    const content = document.getElementById('content')

    const animation2 = document.getElementById('animation2');
    const animation3 = document.getElementById('animation3')

    var displayText = text1.style.display || 'block';
    var display = textNotification.style.display || 'none';

    

    if (display === 'none') {

        textNotification.style.display = 'flex';
        textNotification2.style.display = 'flex';
        teste.style.height = '130%';

        textNot.style.color = '#233E71';
        imgNot.style.color = '#233E71';
        iconNot.style.color = '#233E71';

        animation.style.transform = 'rotate(180deg)';
        animation.style.transition = '0.5s';

        if (displayText === 'none') {
            text1.style.display = 'block';
            text2.style.display = 'block';
            text3.style.display = 'block';
            text4.style.display = 'block';
            text5.style.display = 'block';
            text6.style.display = 'block';
            text7.style.display = 'block';

            nav.style.width = 'auto';
            content.style.width = '80%';

            animation3.style.transform = 'rotate(0deg)'

            animation2.style.display = 'block';
        }

    } else { 
        textNotification.style.display = 'none';
        textNotification2.style.display = 'none';
        teste.style.height = '100%'

        textNot.style.color = '#A6A6A6';
        imgNot.style.color = '#A6A6A6';
        iconNot.style.color = '#A6A6A6';

        animation.style.transform = 'rotate(0deg)';
    }
}


function navigation() {

    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');
    const text5 = document.getElementById('text5');
    const text6 = document.getElementById('text6');
    const text7 = document.getElementById('text7');

    const content = document.getElementById('content')

    const animation = document.getElementById('animation2');
    const animation3 = document.getElementById('animation3')

    const nav = document.getElementById('navigation');

    const textNotification = document.getElementById('notificationBar');
    const textNotification2 = document.getElementById('notificationBar2');

    const textNot = document.getElementById('text3');
    const imgNot = document.getElementById('imgNot');
    const iconNot = document.getElementById('iconNot');
    const teste = document.getElementById('nav');

    var display = text1.style.display || 'block';

    if (display === 'block') {

        //navigation text
        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
        text6.style.display = 'none';
        text7.style.display = 'none';
    
        //notification bar
        textNotification.style.display = 'none';
        textNotification2.style.display = 'none';
        textNot.style.color = '#A6A6A6';
        imgNot.style.color = '#A6A6A6';
        iconNot.style.color = '#A6A6A6';
        animation.style.transform = 'rotate(0deg)';
        teste.style.height = '100%';

        //content
        content.style.width = '90vw';

        //btn
        animation3.style.transform = 'rotate(180deg)';
        animation3.style.transition = '0.5s';

        //navigation
        nav.style.width = '4%';

        animation.style.display = 'none';
    } else {
        text1.style.display = 'block';
        text2.style.display = 'block';
        text3.style.display = 'block';
        text4.style.display = 'block';
        text5.style.display = 'block';
        text6.style.display = 'block';
        text7.style.display = 'block';

        nav.style.width = 'auto';
        content.style.width = '75vw';

        animation3.style.transform = 'rotate(0deg)'

        animation.style.display = 'block';
    }
    
}


