function store() {
  let outPut = `<section>
        <div class="container">`;
        // Popular Genres Starts
  outPut += `<div class="top-library">
    <h1>Popular Genres</h1>
    </div>`;
  outPut += `<div class="library-container">
        <div class="genre-row">`;
  let genreContent = [
    { title: "FPS", image: "../Images/val.jfif" },
    { title: "Open World", image: "../Images/gtav.jpg" },
    { title: "Survival", image: "../Images/minecraft.jpg" },
    { title: "ARPG", image: "../Images/elden.jpg" },
    { title: "Action", image: "../Images/starwars.jpg" },
  ];
  genreContent.forEach((content) => {
    outPut += `<div class="genre-col">
        <img src="${content.image}" alt="Image Not Found">
                    <div class="launch">
                        <span>${content.title}</span>
                    </div>
                </div>`;
  });
  // Popular Genres Ends
  // Recommended For You Starts
  outPut += `</div>
    <hr>
    <div class="top-library">
        <h1>Recommended For You</h1>
    </div>`;
  outPut += `<div class="games-row">
  <div class="feature-game">
      <img src="/Images/cb.jfif" alt="Image Not Found">
      <div class="feature-launch">
          <div class="name-price">
              <span>Cyberpunk 2077</span> <br>
              <span>$29.99</span>
          </div>
          <div class="buy-buttons">
              <input type="button" value="CART">
              <input type="button" value="BUY NOW">
          </div>
      </div>
  </div>
</div>`;
  outPut += `<div class="games-row">`;
  let recommendedItem = [
    { title: "Call of Duty: Black Ops III", image: "../Images/cod3.jpg", price: 49.99 },
    { title: "Call of Duty", image: "/Images/cod2.jpg", price: 29.99},
    { title: "Minecraft", image: "/Images/minecraft.jpg", price: 14.99 },
    { title: "Grand Theft Auto V", image: "/Images/gtav.jpg", price: 30.99 },
    { title: "Borderlands 3", image: "/Images/bl3.jpg", price: 59.99},
    { title: "Pokémon: Legends", image: "/Images/poke.jpg", price: 29.99 },
  ];
  recommendedItem.forEach((content) => {
      outPut += `<div class="games-col">
        <img src="${content.image}" alt="Image Not Found">
        <div class="feature-launch">
            <div class="name-price">
                <span>${content.title}</span> <br>
                <span>${content.price}</span>
            </div>
                <div class="buy-buttons">
                    <input type="button" value="CART">
                    <input type="button" value="BUY NOW">
                </div>
            </div>
        </div>`;
  });
  // Recommended For You Ends
  // Free To Play Starts
  outPut += `</div>
    <hr>
    <div class="top-library">
        <h1>Free To Play</h1>
    </div>`;
    outPut += `<div class="games-row">`;
    let freeToPlay = [
        { title: "Call of Duty: Black Ops III", image: "../Images/cod3.jpg", price: 49.99 },
        { title: "Call of Duty", image: "/Images/cod2.jpg", price: 29.99},
        { title: "Minecraft", image: "/Images/minecraft.jpg", price: 14.99 },
        { title: "Grand Theft Auto V", image: "/Images/gtav.jpg", price: 30.99 },
        { title: "Borderlands 3", image: "/Images/bl3.jpg", price: 59.99},
        { title: "Pokémon: Legends", image: "/Images/poke.jpg", price: 29.99 },
      ];
  freeToPlay.forEach((content) => {
      outPut += `<div class="games-col">
        <img src="${content.image}" alt="Image Not Found">
        <div class="feature-launch">
            <div class="name-price">
                <span>${content.title}</span> <br>
                <span>${content.price}</span>
            </div>
                <div class="buy-buttons">
                    <input type="button" value="CART">
                    <input type="button" value="BUY NOW">
                </div>
            </div>
        </div>`;
  });
  // Free to Play Ends
  // Most Popular Starts
  outPut += `</div>
  <hr>
  <div class="top-library">
  <h1>Most Popular</h1>
    </div>`;
    outPut += `<div class="games-row">`;
    let mostPopular = [
        { title: "Call of Duty: Black Ops III", image: "../Images/cod3.jpg", price: 49.99 },
        { title: "Call of Duty", image: "/Images/cod2.jpg", price: 29.99},
        { title: "Minecraft", image: "/Images/minecraft.jpg", price: 14.99 },
        { title: "Grand Theft Auto V", image: "/Images/gtav.jpg", price: 30.99 },
        { title: "Borderlands 3", image: "/Images/bl3.jpg", price: 59.99},
        { title: "Pokémon: Legends", image: "/Images/poke.jpg", price: 29.99 },
      ];
    mostPopular.forEach((content) => {
        outPut += `<div class="games-col">
        <img src="${content.image}" alt="Image Not Found">
        <div class="feature-launch">
        <div class="name-price">
        <span>${content.title}</span> <br>
        <span>${content.price}</span>
        </div>
        <div class="buy-buttons">
        <input type="button" value="CART">
        <input type="button" value="BUY NOW">
        </div>
        </div>
        </div>`;
    });
    // Most Popular Ends
    outPut += '</div>'
    return outPut;
}
export default store;
