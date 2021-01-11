const items = {
    burger: document.querySelector('[data-burger]'),
    menu: document.querySelector('.menu-list')
}

console.log(items.menu);

items.burger.addEventListener('click', (event)=> {
    event.preventDefault();

    if (items.menu.className === 'menu-list') {
        items.menu.classList.add('menu-active');
        event.target.src = '/images/burger-icon_open.svg';
        console.log('Work')
        console.log(items.menu);
    } else {
        items.menu.classList.remove('menu-active');
        event.target.src = '/images/burger-icon.svg';
    }
})