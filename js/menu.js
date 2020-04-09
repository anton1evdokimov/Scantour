var list = document.querySelectorAll('.left-menu__nav__location');
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function (event) {
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
var list = nav.querySelectorAll('.top-sub-menu');
nav.addEventListener('click', function (event) {
    var t = event.target;
    if (t.classList.contains('top-menu-txt')) {
        close();
        var subMenu = t.querySelector('.top-sub-menu');

        if (subMenu.style.display !== 'flex') {
            subMenu.style.display = 'flex';
        }
        else subMenu.style.display = 'none';
    }
});
nav.addEventListener('mouseleave', close);

function close() {
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    }
}

var dropDown = document.querySelector('#phone-drop-down');
var phone = document.querySelector('#phone-block');

function closeDropDown(){
    dropDown.style.height = "";
    dropDown.style.border = "none";
}

phone.addEventListener('mouseleave', closeDropDown);

document.querySelector('#open-drop-down').addEventListener('click', function () {
    if (dropDown.style.height === "") {
        dropDown.style.height = "100px";
        dropDown.style.border = "#555555 1px solid";
        return;
    }
    closeDropDown();
})

var searchButton = document.querySelector('#search-button');
var search = document.querySelector('#search')
search.addEventListener('focus', function () {
    searchButton.style.display = 'flex';
})
search.addEventListener('blur', function () {
    searchButton.style.display = 'none';
    search.value = '';
})