function header(){
    let outPut = `<header>
        <div class="heading">`;
        outPut+=`<div class="searchbar">
        <img src="/Images/icons8-search-64.png" alt="">
        <input type="search" name="search" placeholder="Search Store..">
        </div>`;
        outPut+=`<div class="headnav">
        <a href="news.html"><p>News</p></a>
        <p>|</p>
        <a href="login.html"><img src="/Images/icons8-user-60.png" alt=""></a>
        <div class="dropdown">
            <button class="dropbtn">Username</button>
            <div class="dropdown-content">
              <a href="login.html">Sign Up</a>
              <a href="adminlog.html">Log In</a>
              <a href="#">Settings</a>
            </div>
        </div>
        </div>`;
        outPut+=`</div>
        </header>`;
        
  

    return outPut;
}

export default header;
