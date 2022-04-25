//--------------- mobile--------------------------------
const navBtnMob = document.querySelector("#nav__btn_mob");
//let navDropContBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop__cont"));
let navDropContMainBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop_main"));
const navBtnMobResources = document.querySelector("#nav_bottom__btn_resources");
let navDropContMarketsBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop_markets"));
const navBtnMobProducts = document.querySelector("#nav_bottom__btn_products");
let navDropContProductsBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop_products"));

const menuMobButtons = document.querySelectorAll(".navbtn");



//------------------------------desktop------------------------------------

const navMarketsBtn = document.querySelector("#nav_bottom__markets-btn");
let navMarketsBS = new bootstrap.Collapse(document.querySelector("#nav-section_markets"));
const navProductsBtn = document.querySelector("#nav_bottom__products-btn");
let navProductsBS = new bootstrap.Collapse(document.querySelector("#nav-section_products"));
//const navSearchsBtn = document.querySelector("#nav_top__btn_search");
let navSearchBS = new bootstrap.Collapse(document.querySelector("#nav-section_search"));






//const navDrop = document.querySelector("#nav_bottom__drop");
//const linksSubMenu = document.querySelectorAll(".nav_bottom__btn_1");
//const blockMarkets = document.querySelector("#nav_bottom__markets");
//const blockProducts = document.querySelector("#nav_bottom__products");
//const block1 = document.querySelector("#nav_bottom__drop__block-1");
//const block2 = document.querySelector("#nav_bottom__drop__block-2");
const blockBack = document.querySelector("#nav_bottom__drop__back");
//const blockBack = document.querySelector("#nav_bottom__drop__back");
//const sectionMarkets = document.querySelector("#nav-section_markets");
//const sectionProducts = document.querySelector("#nav-section_products");



//const navOpacityBlock = document.querySelector("#nav__drop__opacity-block");

//const navTopSearch = document.querySelector("#nav_top__search");
//const sectionSearch = document.querySelector("#nav-section_search");


//const blockCookies = document.querySelector("#block_cookies");
const blockCookiesBS = new bootstrap.Collapse(document.querySelector("#block_cookies"));
const cookiesControls = document.querySelectorAll(".cookies-control");


const modalContactUsDiv = document.querySelector("#contactUsModal")
const modalSubmitBtn = modalContactUsDiv.querySelector(".contactUsModal__btn_submit");
const modalValidateInputs = modalContactUsDiv.querySelectorAll(".validate");
const modalContactUsBS = new bootstrap.Modal(document.getElementById('contactUsModal'))



let store = { 
    menu: "",
    showCookies: false,
    modalContactUS: false
}



//-----------------toggle menu mob---------------------------------------------------
function toggleMobMenu(menuName) {
    console.log("menuName = ", menuName);
    console.log("store.menu before ", store.menu);

    if (menuName === store.menu) {
        store.menu = "";
    } else {
        if (store.menu && menuName === "mob_main") {
            store.menu = "";
        } else {
            store.menu = menuName;
        }
    }

    console.log("store.menu after ", store.menu);


    

    if (store.menu === "") {
        navDropContMainBS.hide();
        navDropContMarketsBS.hide();
        navDropContProductsBS.hide();
        navProductsBS.hide();
        navMarketsBS.hide();
        navSearchBS.hide();
        navMarketsBtn.classList.remove("opened")
        navProductsBtn.classList.remove("opened")
    }
    
    if ((store.menu === "mob_main") || (store.menu === "mob_back")) {
        navDropContMainBS.show();
        navDropContMarketsBS.hide();
        navDropContProductsBS.hide();
    }

    if (store.menu === "mob_markets") {
        navDropContMainBS.hide();
        navDropContMarketsBS.show();
        navDropContProductsBS.hide();
    }

    if (store.menu === "mob_products") {
        navDropContMainBS.hide();
        navDropContMarketsBS.hide();
        navDropContProductsBS.show();
    }

    if (store.menu === "markets") {
        navMarketsBS.show();
        navProductsBS.hide();
        navSearchBS.hide();
        navProductsBtn.classList.remove("opened")
        navMarketsBtn.classList.add("opened")
    }

    if (store.menu === "products") {
        navProductsBS.show();
        navMarketsBS.hide();
        navSearchBS.hide();
        navMarketsBtn.classList.remove("opened")
        navProductsBtn.classList.add("opened")
    }

    if (store.menu === "search") {
        navSearchBS.show();
        navMarketsBS.hide();
        navProductsBS.hide();
        navMarketsBtn.classList.remove("opened")
        navProductsBtn.classList.remove("opened")
    }

}




menuMobButtons.forEach((button) => {
    //console.log(button.dataset.navbtn);

    button.addEventListener("click", (e) => {
        toggleMobMenu(button.dataset.navbtn);
    })
})






function cookiesAction(action) {
    console.log(action);
    if (action === "close") {
        //store.showCookies = false
    }
    if (action === "accept") {
        //store.showCookies = false
        //insert some accept-cookie action here
    }
}





cookiesControls.forEach((cookieControl) => {
    cookieControl.addEventListener("click", (e) => {
        cookiesAction(e.target.dataset.action)
    })

}) 



//--------------------------------modal SUBMIT----------------------------------------------
function modalSubmitClicked(e) {
    let correct = true;
    modalValidateInputs.forEach(input => !input.validity.valid ? correct = false : null )
    // send form logic is here
    correct && modalContactUsBS.hide()
}


modalSubmitBtn.addEventListener("click", (e) => {
    modalSubmitClicked(e);
})


//--------------------cookies---------------------------

store.showCookies ? blockCookiesBS.show() : null