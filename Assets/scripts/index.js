document.addEventListener('click', (event) => {

    // console.log(event.target, !event.target.matches('#icon'))
    if (!event.target.matches('#icon')) return;
    event.preventDefault();

    const element = document.getElementById('notificationBar');
    const btn = document.getElementById('icon');

    btn.classList.toggle("isOpen");
    element.classList.toggle("isOpen");
    console.log('b');

}, false);


document.addEventListener('click', (event) => {
    console.log(event.target, !event.target.matches('#openCloseNav'))

    if ( !event.target.matches('#openCloseNav')) return;
    event.preventDefault();

    const element = document.getElementById('nav');
    const content = document.getElementById('content');

    element.classList.toggle('isClosed');
    content.classList.toggle('isClosed');
    console.log('b')
}), false;