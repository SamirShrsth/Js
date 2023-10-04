function sidebar() {
  let outPut = `<aside>
      <div class="sidebar">
          <div class="logo">
              <a href="index.html">
                  <img src="/Images/unigames-high-resolution-logo-color-on-transparent-background.png" alt="Not Found">
              </a>
          </div>
          <hr>`;
  let menuOptions = [
    {
      title: "Home",
      name: "index",
      image: "../images/icons8-home-page-60.png",
    },
    {
      title: "Library",
      name: "library",
      image: "../images/icons8-four-squares-60.png",
    },
    {
      title: "Store",
      name: "store",
      image: "../images/icons8-online-store-64.png",
    },
    {
      title: "Cart",
      name: "cart",
      image: "../images/icons8-shopping-cart-60.png",
    },
  ];

  outPut += '<div class="sidenav">';
  menuOptions.forEach((side) => {
    outPut += `
      <a class="${side.name}" href="${side.name}.html">
        <img src="${side.image}" alt="" class="" />
        <p>${side.title}</p>
      </a>
      `;
  });
  outPut += `</div>
    </div>
    </aside>`;
  return outPut;
}
export default sidebar;
