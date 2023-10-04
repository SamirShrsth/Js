import header from "./components/header.js";
import homepage from "./components/homepage.js";
import sidebar from "./components/sidebar.js";
import library from "./components/library.js";
import store from "./components/store.js";
import cart from "./components/cart.js";
import login from "./components/login.js";
import adminlog from "./components/adminlog.js";
import news from "./components/news.js";

function app(page){
    let outPut = "";
    if(page == "login"){
        outPut += login();
    }
    else if(page == "adminlog"){
        outPut += adminlog()
    }
    else if(page != ""){
        outPut += header();
        outPut +=sidebar();
        if(page == "home"){
            outPut += homepage();
        }
        if(page == "library"){
            outPut += library();
        }
        if(page == "store"){
            outPut += store();
        }
        if(page == "cart"){
            outPut += cart();
        }
        if(page == "news"){
            outPut += news();
            
        }
    }
    return outPut;
}
export default app;