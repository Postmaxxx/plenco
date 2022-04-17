const navBtnMob = document.querySelector("#nav__btn_mob");
const navDrop = document.querySelector("#nav_bottom__drop");
let store = {
    mobMenuOpened: false,
}



function toggleMobMenu(e) {
    store.mobMenuOpened = !store.mobMenuOpened;
    console.log(store.mobMenuOpened);
    if (store.mobMenuOpened) {
        navBtnMob.classList.add("opened");
        navDrop.classList.add("nav_bottom__drop_opened");
    } else {
        navBtnMob.classList.remove("opened");
        navDrop.classList.remove("nav_bottom__drop_opened");
    }
}




navBtnMob.addEventListener('click', e => toggleMobMenu(e));