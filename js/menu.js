var list = document.querySelectorAll('.left-menu__nav__location');
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', event => {
        var e = event.currentTarget;
        if (e.classList.contains('minus')) {
            e.classList.replace('minus', 'plus');
            e.querySelector('.left-menu__nav__submenu').style.display = 'none';
        } else {
            e.classList.replace('plus', 'minus');
            e.querySelector('.left-menu__nav__submenu').style.display = 'block';
        }
    })
}

//var event.target = document.querySevent.targetector('.left-menu__nav__location__header__icon');