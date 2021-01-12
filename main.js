const items = {
    burger: document.querySelector('[data-burger]'),
    menu: document.querySelector('.menu-list')
}

const images = [
    {
        name: 'Iphone',
        description: `Год выпуска: 2007 <br>
        Объем памяти: 4, 8, 16 ГБ <br>
        Номер модели на задней панели корпуса: A1203.`,
        info: 'Сведения: задняя панель корпуса изготовлена из анодированного алюминия. С верхней стороны имеется лоток SIM-карты для карт второго форм-фактора (2FF) Mini-SIM. Серийный номер выгравирован на задней панели корпуса'
    }
]

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