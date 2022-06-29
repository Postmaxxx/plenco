//--------------- mobile--------------------------------
const navBtnMob = document.querySelector("[data-obj='nav__btn_mob']");
//let navDropContBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop__cont"));
let navDropContMainBS = new bootstrap.Collapse(document.querySelector("[data-obj='nav_bottom__drop_main']"));
const navBtnMobResources = document.querySelector("[data-obj='nav_bottom__drop_main']");
let navDropContMarketsBS = new bootstrap.Collapse(document.querySelector("[data-obj='nav_bottom__drop_markets']"));
const navBtnMobProducts = document.querySelector("[data-obj='nav_bottom__btn_products']");
let navDropContProductsBS = new bootstrap.Collapse(document.querySelector("[data-obj='nav_bottom__drop_products']"));

const menuMobButtons = document.querySelectorAll("[data-navbtn]");


//------------------------------desktop------------------------------------

const navMarketsBtn = document.querySelector("[data-obj='nav_bottom__markets-btn']");
let navMarketsBS = new bootstrap.Collapse(document.querySelector("[data-obj='nav-section_markets']"));
const navProductsBtn = document.querySelector("[data-obj='nav_bottom__products-btn']");
let navProductsBS = new bootstrap.Collapse(document.querySelector("[data-obj='nav-section_products']"));
//const navSearchsBtn = document.querySelector("#nav_top__btn_search");
let navSearchBS = new bootstrap.Collapse(document.querySelector("[data-obj='nav-section_search']"));


//---------------------------------cookies----------------------------------

const cookieButtons = document.querySelectorAll("[data-cookieaction]");
const blockCookiesBS = new bootstrap.Collapse(document.querySelector("[data-obj='block_cookies']"));






//-----------------------------------side menu / modal contactUs -----------------------------
const contactUsModal = document.querySelector("[data-obj='contactUsModal']");
const modalMessageCloseBtn = contactUsModal.querySelector("[data-obj='contactUsModal__btn_close']");
const modalMessageSubmitBtn = contactUsModal.querySelector("[data-obj='contactUsModal__btn_submit']");
const modalMessageInputs = contactUsModal.querySelectorAll("[data-obj='modal-body__input']");
const modalMessageValidateInputs = contactUsModal.querySelectorAll("[data-validate]");
const modalMessageBS = new bootstrap.Modal(document.querySelector("[data-obj='contactUsModal']"));


//-----------------------------------side menu / modal email signUp -----------------------------
const emailSignUpModal = document.querySelector("[data-obj='emailSignUpModal']");
const modalEmailSignUpCloseBtn = emailSignUpModal.querySelector("[data-obj='emailSignUpModal__btn_close']");
const modalEmailSignUpBtn = emailSignUpModal.querySelector("[data-obj='emailSignUpModal__btn_submit']");
const modalEmailSignUpInputs = emailSignUpModal.querySelectorAll("[data-obj='modal-body__input']");
const modalEmailSignUpValidateInputs = emailSignUpModal.querySelectorAll("[data-validate]");
const modalemailSignUpBS = new bootstrap.Modal(document.querySelector("[data-obj='emailSignUpModal']"));

//-----------------------------------side menu / modal email download -----------------------------
const emailDownloadModal = document.querySelector("[data-obj='emailDownloadModal']");
const modalEmailDownloadCloseBtn = emailDownloadModal.querySelector("[data-obj='emailDownloadModal__btn_close']");
const modalEmailDownloadBtn = emailDownloadModal.querySelector("[data-obj='emailDownloadModal__btn_submit']");
const modalEmailDownloadInputs = emailDownloadModal.querySelectorAll("[data-obj='modal-body__input']");
const modalEmailDownloadValidateInputs = emailDownloadModal.querySelectorAll("[data-validate]");
const modalemailDownloadBS = new bootstrap.Modal(document.querySelector("[data-obj='emailDownloadModal']"));

const accemailDownloadModal = emailDownloadModal.querySelector("[data-obj='accordion-emailDownloadModal']");
let accemailDownloadModalButton = accemailDownloadModal.querySelector("[data-obj='accordion-emailDownloadModal__button']");
var accemailDownloadModalBody = new bootstrap.Collapse(accemailDownloadModal.querySelector("[data-obj='acc-emailDownloadModal__body-1']"), {
    toggle: false
});

//------------------------------- store -----------------------------------------------

let store = { 
    menu: "",
    showCookies: true,
    modalContactUS: false,
    cookies_delay: 3000
}



//------------------------------- sclose all menus and modal windows------------------------------
function closeAll() {
    navDropContMainBS.hide();
    navDropContMarketsBS.hide();
    navDropContProductsBS.hide();
    navProductsBS.hide();
    navMarketsBS.hide();
    navSearchBS.hide();
    navMarketsBtn.classList.remove("opened")
    navProductsBtn.classList.remove("opened")
    navBtnMob.classList.remove("opened");
}


//----------------- menu mob---------------------------------------------------
function toggleMobMenu(menuName) {
    //console.log("menuName = ", menuName);
    //console.log("store.menu before ", store.menu);

    if (menuName === store.menu) {
        store.menu = "";
    } else {
        if (store.menu && menuName === "mob_main") {
            store.menu = "";
        } else {
            store.menu = menuName;
        }
    }

    //console.log("store.menu after ", store.menu);


    if (store.menu === "") {
        closeAll();
    }
    
    if ((store.menu === "mob_main") || (store.menu === "mob_back")) {
        closeAll();
        navBtnMob.classList.add("opened");
        navDropContMainBS.show();
    }

    if (store.menu === "mob_markets") {
        closeAll();
        navBtnMob.classList.add("opened");
        navDropContMarketsBS.show();
    }

    if (store.menu === "mob_products") {
        closeAll();
        navBtnMob.classList.add("opened");  
        navDropContProductsBS.show();
    }

    if (store.menu === "markets") {
        closeAll();
        navMarketsBS.show();
        navMarketsBtn.classList.add("opened")
    }

    if (store.menu === "products") {
        closeAll();
        navProductsBS.show();
        navProductsBtn.classList.add("opened")
    }

    if (store.menu === "search") {
        closeAll();
        navSearchBS.show();
    }

    if (store.menu === "contact_modal") {
        closeAll();
        modalMessageBS.show();
    }

    if (store.menu === "email-singup_modal") {
        closeAll();
        modalemailSignUpBS.show();
    }

    if (store.menu === "email-download_modal") {
        closeAll();
        modalemailDownloadBS.show();
    }

}

menuMobButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        toggleMobMenu(button.dataset.navbtn);
    })
})




//--------------------cookies---------------------------


function cookiesAction(action) {
    console.log("cookies: ", action);
    if (action === "close") {
        store.showCookies = false;
        //insert some deny-cookie action here
    }
    if (action === "accept") {
        store.showCookies = false;
        //insert some accept-cookie action here
    }
    if (action === "deny") {
        store.showCookies = false;
        //insert some deny-cookie action here
    }
    store.showCookies ? blockCookiesBS.show() :  blockCookiesBS.hide();
}

if (cookieButtons) {
    cookieButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            cookiesAction(button.dataset.cookieaction);
        })
    })  
    
    setTimeout(() => {
        store.showCookies ? blockCookiesBS.show() : null;
    }, store.cookies_delay)

}







//--------------------------------modals ----------------------------------------------

//----------------------------------- Contact Us ------------------------------------------
function modalMessageSubmitClicked(e) {
    
    let correct = true;
    console.log(modalMessageValidateInputs);
    modalMessageValidateInputs.forEach(input => !input.validity.valid ? correct = false : null )
    if (correct) {
        // send form logic should be here
        let sendingData = []
        modalMessageInputs.forEach((input) => sendingData.push(input.value));
        console.log("sending data: ", sendingData);
        //store.menu = "";
        alert("All data has been sent! (Contact Us)");
        modalMessageBS.hide();

    } else {
        console.log('Incorrect sending data, sending canceled');
    }
}


modalMessageSubmitBtn.addEventListener("click", (e) => {
    modalMessageSubmitClicked(e);
})


contactUsModal.addEventListener("hide.bs.modal", (e) => {
    store.menu = "";
})


//----------------------------------- Email Sign Up ------------------------------------------

function modalEmailSignUpClicked(e) {
    let correct = true;
    modalEmailSignUpValidateInputs.forEach(input => !input.validity.valid ? correct = false : null )
    if (correct) {
        // send form logic should be here
        let sendingData = []
        modalEmailSignUpInputs.forEach((input) => sendingData.push(input.value));
        console.log("sending data: ", sendingData);
        //store.menu = "";
        alert("All data has been sent! (Sign Up)");
        modalemailSignUpBS.hide();
    } else {
        console.log('Incorrect sending data, sending canceled');
    }
}


modalEmailSignUpBtn.addEventListener("click", (e) => {
    modalEmailSignUpClicked(e);
})


emailSignUpModal.addEventListener("hide.bs.modal", (e) => {
    store.menu = "";
})




//----------------------------------- Email Download ------------------------------------------

function modalEmailDownloadClicked(e) {
    let correct = true;
    modalEmailDownloadValidateInputs.forEach(input => !input.validity.valid ? correct = false : null )
    if (correct) {
        // send form logic should be here
        let sendingData = []
        modalEmailDownloadInputs.forEach((input) => sendingData.push(input.value));
        console.log("sending data: ", sendingData);
        //store.menu = "";
        alert("All data has been sent! (Download)");
        modalemailDownloadBS.hide();
    } else {
        console.log('Incorrect sending data, sending canceled');
    }
}


modalEmailDownloadBtn.addEventListener("click", (e) => {
    modalEmailDownloadClicked(e);
})

emailDownloadModal.addEventListener("hide.bs.modal", (e) => {
    store.menu = "";
})


function fillInputIndustry(value) {
    emailDownloadModal.querySelector("[data-obj='emailDownloadModal-industry-input']").value = value; //fill invisible input with the current/chosen value
}

 
function changeemailDownloadModalValue(e) { // change the header text from the selected item
    accemailDownloadModalButton.children[0].innerText = e.target.children[0].innerText;
    fillInputIndustry(accemailDownloadModalButton.children[0].innerText);
    accemailDownloadModalBody.hide();
}


accemailDownloadModal.addEventListener('click', (e) => {
    if (e.target.dataset.obj != "accordion-emailDownloadModal__button") { // if selected !header
        changeemailDownloadModalValue(e);
    }
})


fillInputIndustry(accemailDownloadModalButton.children[0].innerText);



  