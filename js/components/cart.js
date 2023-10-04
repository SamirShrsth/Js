function cart() {
  let outPut = `<section>
        <div class="container">`;

  outPut += `<div class="top-library">
    <h1>My Cart</h1>
    <div class="sort">
        <span>Sort By:</span>
        <select name="sort" id="sort">
            <option value="name">Recently Added</option>
            <option value="date">Most Played</option>
            <option value="price">Alphabetical</option>
        </select>
    </div>
    </div>`;
    outPut += `<div class ="library-container">`;
    let cartItems = [
        { title: "Call of Duty: Black Ops III", image: "../Images/cod3.jpg", price: 49.99 },
        { title: "Call of Duty", image: "/Images/cod2.jpg", price: 29.99},
        { title: "Minecraft", image: "/Images/minecraft.jpg", price: 14.99 },
        { title: "Grand Theft Auto V", image: "/Images/gtav.jpg", price: 30.99 },
        { title: "Borderlands 3", image: "/Images/bl3.jpg", price: 59.99},
        { title: "Pokémon: Legends", image: "/Images/poke.jpg", price: 29.99 },
      ];
      let totalPrice=0;
      cartItems.forEach((content) =>{
        totalPrice += content.price;
        outPut += `<div class="games-row">
        <div class="cart-image">
            <img src="${content.image}" alt="">
        </div>
        <div class="cart-name">
            <span><b>${content.title}</b></span>
            <span>$${content.price}</span>
        </div>
        <div class="cart-remove">
            <input class = "rembtn" type="button" value="Remove From Cart">
        </div>
        </div>`;
      });
      
      document.addEventListener('DOMContentLoaded', function () {
          function myfunction() {
              document.addEventListener('click', (e) => {
                  if (e.target.classList.contains('rembtn')) {
                      e.preventDefault();
                      let remdiv = e.target.parentElement.parentElement;
                      remdiv.remove();
                    }
                });
            }
            myfunction();
        });
        
        outPut += `<div class="checkout">
        <h2>Your Cart Summary</h2>
        <div class="sumrow">
            <span>Price:</span>
            <span>$${totalPrice}</span>
        </div>
        <div class="sumrow">
            <span>No. of Games:</span>
            <span>${cartItems.length}</span>
        </div>
        <div class="sumrow">
            <span>Discount:</span>
            <span>- $${10*(totalPrice)/100}</span>
        </div>
        <hr>
        <div class="sumrow">
            <span>Total</span>
            <span>$106.47</span>
        </div>
        <input class="" type="button" value="CHECKOUT">
    </div>`;

   


  outPut += `</div>
  </div>
  </section>`;
      

  return outPut;
}
export default cart;
