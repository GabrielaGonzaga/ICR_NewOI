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

function openCloseNotifications() {

    const select = document.getElementById('selectNotification');

    const btn = document.getElementById('notificationBtn');
    const path = document.getElementById('path');
    const path2 = document.getElementById('path2');

    const text = document.getElementById('nav-text');

    var display = select.style.display || 'none'

    if (display === 'none') {

        select.style.display = 'flex';

        btn.style.transform = 'rotate(180deg)';
        btn.style.transition = '0.5s';
        btn.style.color = '#233E71';

        path.style.color = '#233E71';
        path2.style.color = '#233E71';
        
        text.style.color= '#233E71';

    } else if ( display === 'flex') {

        select.style.display = 'none';
        btn.style.transform = 'rotate(0deg)';
        btn.style.transition = '0.5s';
        btn.style.color = '#A6A6A6';

        path.style.color = '#a6a6a6';
        path2.style.color = '#a6a6a6';

        text.style.color= '#a6a6a6';
    }
}