function library() {
  let outPut = `<section>
    <div class="container">
        <div class="top-library">
            <h1>My Library</h1>
            <div class="sort">
                <span>Sort By:</span>
                <select name="sort" id="sort">
                    <option value="name">Recently Added</option>
                    <option value="date">Most Played</option>
                    <option value="price">Alphabetical</option>
                </select>
            </div>
        </div>`;
  outPut += `<div class="library-container">
    <div class="games-row">`;
  let libraryContent = [
    { title: "Call of Duty: Black Ops III", image: "../Images/cod3.jpg" },
    { title: "Call of Duty", image: "/Images/cod2.jpg" },
    { title: "Minecraft", image: "/Images/minecraft.jpg" },
    { title: "Grand Theft Auto V", image: "/Images/gtav.jpg" },
    { title: "Borderlands 3", image: "/Images/bl3.jpg" },
    { title: "Pokémon: Legends", image: "/Images/poke.jpg" },
    { title: "Star Wars Squadrons", image: "/Images/starwars.jpg" },
    { title: "League Of Legends", image: "/Images/lol.jfif" },
    { title: "Overwatch", image: "/Images/ow.png" },
    { title: "VALORANT", image: "/Images/val.jfif" },
    { title: "DarkWood", image: "/Images/Darkwood.jpg" },
    { title: "Borderlands 3", image: "/Images/bl3.jpg" },
    { title: "League Of Legends", image: "/Images/lol.jfif" },
    { title: "Pokémon: Legends", image: "/Images/poke.jpg" },
  ];
  libraryContent.forEach((content) => {
    outPut += '<div class="games-col">';
    outPut += `<img src="${content.image}" alt="">
        <div class="launch">
            <span>${content.title}</span>
            <input type="button" value="Play">
        </div>`;
    outPut += '</div>';
  });
  outPut+=`</div>
  </div>
  </div>
  </section>`;

  return outPut;
}
export default library;
