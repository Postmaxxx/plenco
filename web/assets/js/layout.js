const navBtnMob = document.querySelector("#nav__btn_mob");

let store = {
    mobMenuOpened: false,
}



function toggleMobMenu(e) {
    store.mobMenuOpened = !store.mobMenuOpened;
    console.log(store.mobMenuOpened);
    if (store.mobMenuOpened) {
        navBtnMob.classList.add("opened");
    } else {
        navBtnMob.classList.remove("opened");
    }
}




navBtnMob.addEventListener('click', e => toggleMobMenu(e));
//# sourceMappingURL=layout.js.map
