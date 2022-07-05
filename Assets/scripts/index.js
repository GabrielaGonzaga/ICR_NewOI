function profileConfig() {

    var display = document.getElementById('profileNavigation').style.display || 'none';

    if (display === 'none') {
        document.getElementById('profileNavigation').style.display = 'block';
    } else {
        document.getElementById('profileNavigation').style.display = 'none';
    }


}