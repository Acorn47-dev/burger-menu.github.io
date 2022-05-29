const menubody = document.querySelector(".menu__body");
let menuarrows = document.querySelectorAll('.menu__arrow');
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
const iconmenu = document.querySelector('.menu__icon');
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};
if (isMobile.any()) {
    document.body.classList.add('_touch');
   
    if (menuarrows.length > 0) {
        for (let index = 0; index < menuarrows.length; index++) {
            const menuarrow = menuarrows[index];
            menuarrow.addEventListener("click", function (e) {
                menuarrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}




if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (iconmenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconmenu.classList.remove('_active');
            menubody.classList.remove('_active');
        }
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoblock = document.querySelector(menuLink.dataset.goto);
            const gotoblockvalue = gotoblock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: gotoblockvalue,
                left: 0,
                behavior: 'smooth'
            });
            e.parentDefult();
        }
    }
}


if (iconmenu) {
   
    iconmenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconmenu.classList.toggle('_active');
        menubody.classList.toggle('_active');
    });
}