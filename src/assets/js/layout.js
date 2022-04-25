//--------------- mobile--------------------------------
const navBtnMob = document.querySelector("#nav__btn_mob");
//let navDropContBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop__cont"));
let navDropContMainBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop_main"));
const navBtnMobResources = document.querySelector("#nav_bottom__btn_resources");
let navDropContMarketsBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop_markets"));
const navBtnMobProducts = document.querySelector("#nav_bottom__btn_products");
let navDropContProductsBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop_products"));

const menuMobButtons = document.querySelectorAll(".navbtnmob");



//------------------------------desktop------------------------------------

const navMarketsBtn = document.querySelector("#nav_bottom__markets-btn");
let navMarketsBtnBS = new bootstrap.Collapse(document.querySelector("#nav-section_markets"));
const navProductsBtn = document.querySelector("#nav_bottom__products-btn");
let navProductsBtnBS = new bootstrap.Collapse(document.querySelector("#nav-section_products"));





















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
    //mobMenuOpened: false,
    //subMenu: "main",
    
    submenu: "",
    showCookies: false,
    modalContactUS: false
}
//navDropContMainBS.show(); 


//-----------------toggle main menu mob---------------------------------------------------
function toggleMobMenu(subMenuName) {

    if (store.submenu && subMenuName === "main") {
        store.submenu = "";
    } else {
        store.submenu = subMenuName;
    }
    

    if (store.submenu === "") {
        navDropContMainBS.hide();
        navDropContMarketsBS.hide();
        navDropContProductsBS.hide();
    }
    
    if ((store.submenu === "main") || (store.submenu === "back")) {
        navDropContMainBS.show();
        navDropContMarketsBS.hide();
        navDropContProductsBS.hide();
    }

    if (store.submenu === "markets") {
        navDropContMainBS.hide();
        navDropContMarketsBS.show();
        navDropContProductsBS.hide();
    }

    if (store.submenu === "products") {
        navDropContMainBS.hide();
        navDropContMarketsBS.hide();
        navDropContProductsBS.show();
    }




//        navBtnMob.classList.remove("opened");
//          navDropContBS.hide()

/*
    if (store.submenu === "main") {
        navBtnMob.classList.add("opened");
        navDropContBS.show();
        navDropContMainBS.show();
        console.log('Main menu opened');
        //navDrop.classList.add("nav_bottom__drop_opened");
        //navOpacityBlock.classList.add("opened");
    }  
    
    if (store.submenu === "markets") {
        navDropContMainBS.hide()
        navDropContMarketsBS.show()

        //navDrop.classList.remove("nav_bottom__drop_opened");
        //navOpacityBlock.classList.remove("opened");
    }

*/
}

//navBtnMob.addEventListener("click", e => toggleMobMenu(e));
menuMobButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        toggleMobMenu(button.dataset.navbtnmob);
    })
})























function openSubMenu(submenu) {
   // console.log(submenu);

    if (submenu === "main") {
        store.subMenu = "main";
        blockMarkets.classList.remove("opened")
        blockProducts.classList.remove("opened")
        //sectionMarkets.classList.remove("opened")
        //sectionProducts.classList.remove("opened")
        //sectionSearch.classList.remove("opened")
        
        block1.classList.add("opened");
        block2.classList.add("opened");
        blockBack.classList.remove("opened");
        //navMarketsBtn.classList.remove("opened")
        //navProductsBtn.classList.remove("opened")
    }


    if (submenu === "markets") {
        store.subMenu = "markets";
        //sectionMarkets.classList.add("opened")
        //sectionProducts.classList.remove("opened")
        //navMarketsBtn.classList.add("opened")
        //navProductsBtn.classList.remove("opened")
    }

    if (submenu === "products") {
        store.subMenu = "products";
        //sectionProducts.classList.add("opened")
        //sectionMarkets.classList.remove("opened")
        //navProductsBtn.classList.add("opened")
        //navMarketsBtn.classList.remove("opened")
    }
/*
    if (submenu === "search") {
        store.subMenu = "search";
        sectionSearch.classList.add("opened")

        sectionProducts.classList.remove("opened")
        sectionMarkets.classList.remove("opened")
        navProductsBtn.classList.remove("opened")
        navMarketsBtn.classList.remove("opened")
    }
*/
    if (submenu === "markets_mob") {
        store.subMenu = "markets_mob";
        blockMarkets.classList.add("opened")
        block1.classList.remove("opened");
        block2.classList.remove("opened");
        blockBack.classList.add("opened");
    }
    if (submenu === "products_mob") {
        store.subMenu = "products_mob";
        blockProducts.classList.add("opened")
        block1.classList.remove("opened");
        block2.classList.remove("opened");
        blockBack.classList.add("opened");
    }
}



function cookiesAction(action) {
    console.log(action);
    if (action === "close") {
        //store.showCookies = false
    }
    if (action === "accept") {
        //store.showCookies = false
        //insert some accept-cookie action here
    }
    //store.showCookies ? blockCookies.classList.add("visible") : blockCookies.classList.remove("visible")
}






/*
linksSubMenu.forEach((link) => {
    if (link.dataset.submenu) {
        link.addEventListener("click", e => openSubMenu(link.dataset.submenu))
    }
})

blockBack.addEventListener("click", e => openSubMenu("main"));

*/
//----------------------------------------Markets desktop----------------------------------------------
navMarketsBtn.addEventListener("click", (e) => {
    //store.subMenu === "markets" ? openSubMenu("main") : openSubMenu("markets")
    navProductsBtnBS.hide();
    navProductsBtn.classList.remove("opened")
    //if ()
    navMarketsBtn.classList.add("opened")
});

//----------------------------------------Products desktop----------------------------------------------
navProductsBtn.addEventListener("click", (e) => {
    //store.subMenu === "products" ? openSubMenu("main") : openSubMenu("products")
    navMarketsBtnBS.hide()
    navMarketsBtn.classList.remove("opened")
    navProductsBtn.classList.add("opened")
});


/*
navTopSearch.addEventListener("click", e => {
    store.subMenu === "search" ? openSubMenu("main") : openSubMenu("search")
});
*/


cookiesControls.forEach((cookieControl) => {
    cookieControl.addEventListener("click", (e) => {
        cookiesAction(e.target.dataset.action)
    })

}) 


/*
window.addEventListener("load", (e) => {
    store.showCookies ? blockCookies.classList.add("visible") : blockCookies.classList.remove("visible")
})

*/

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