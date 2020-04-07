var list = document.querySelectorAll('.left-menu__nav__location');
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(event) {
        var e = event.currentTarget;
        if (e.classList.contains('minus')) {
            e.classList.add('plus');
            e.classList.remove('minus');
            e.querySelector('.left-menu__nav__submenu').style.display = 'none';
        } else {
            e.classList.add('minus');
            e.classList.remove('plus');
            e.querySelector('.left-menu__nav__submenu').style.display = 'block';
        }
    })
}

var nav = document.querySelector('.top-menu');
nav.addEventListener('click', function (event) {
    var t = event.target;
    var subMenu = t.nextSibling;
    if (t.classList.contains('top-menu-txt')) {
        if (subMenu.style.display === 'none'){
            subMenu.style.display = 'flex';
        }
        else subMenu.style.display = 'none';
    }
})