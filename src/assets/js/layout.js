const navBtnMob = document.querySelector("#nav__btn_mob");
const navDrop = document.querySelector("#nav_bottom__drop");
const linksSubMenu = document.querySelectorAll(".nav_bottom__btn_1");
const blockMarkets = document.querySelector("#nav_bottom__markets");
const blockProducts = document.querySelector("#nav_bottom__products");
const block1 = document.querySelector("#nav_bottom__drop__block-1");
const block2 = document.querySelector("#nav_bottom__drop__block-2");
const blockBack = document.querySelector("#nav_bottom__drop__back");
//const blockBack = document.querySelector("#nav_bottom__drop__back");


let store = {
    mobMenuOpened: false,
    subMenu: "main"
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



function openSubMenu(submenu) {
    console.log(submenu);

    if (submenu === "main") {
        store.subMenu = "main";
        blockMarkets.classList.remove("opened")
        blockProducts.classList.remove("opened")
        
        block1.classList.add("opened");
        block2.classList.add("opened");
        blockBack.classList.remove("opened");
    }
    if (submenu === "markets") {
        store.subMenu = "markets";
        blockMarkets.classList.add("opened")
        block1.classList.remove("opened");
        block2.classList.remove("opened");
        blockBack.classList.add("opened");
    }
    if (submenu === "products") {
        store.subMenu = "products";
        blockProducts.classList.add("opened")
        block1.classList.remove("opened");
        block2.classList.remove("opened");
        blockBack.classList.add("opened");
    }
}


navBtnMob.addEventListener("click", e => toggleMobMenu(e));



linksSubMenu.forEach((link) => {
    if (link.dataset.submenu) {
        link.addEventListener("click", e => openSubMenu(link.dataset.submenu))
    }
})

blockBack.addEventListener("click", e => openSubMenu("main"));



