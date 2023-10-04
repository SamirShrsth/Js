function homepage() {
  let outPut = `<section>
    <div class="container">`;
  outPut += featured();
  outPut += secondary();
  outPut += `</div>
    </section>`;
  return outPut;
}
function formatDate(date) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
function featured() {
  let featuredTitle = "Featured This Week";
  let currentDate = new Date();
  let formattedDate = formatDate(currentDate);
  let featuredImages = [
    "../Images/elden.jpg",
    "../images/Darkwood.jpg",
    "../images/bl3.jpg",
    "../images/ds3.jpg",
    "../images/fort.jpg",
    "../images/cod3.jpg"
  ];
  let outPut = `
    <div class="top-feature">
      <h1>${featuredTitle}</h1>
      <h1 class="feature-date">${formattedDate}</h1>
    </div>
    `;
  outPut += `
  <div id="slider" class="image-slider">
  `;
  // Display the first image as the initial image
  outPut += `<img class="mainimg fade-in" src="${featuredImages[0]}" id="current-image" />`;

  // Rest of the images
  for (let index = 1; index < featuredImages.length; index++) {
    outPut += `<img class="mainimg fade-in" src="${featuredImages[index]}" />`;
  }
  document.addEventListener("DOMContentLoaded", function () {
    var currentImageIndex = 0;  
    var prevBtn = document.getElementById("prev-btn");
    var nextBtn = document.getElementById("next-btn");
    var currentImage = document.getElementById("current-image");
    var secImages = document.querySelectorAll(".sec-images a");

    function highlightSecondaryImage(index) {
      secImages.forEach((secImage, secIndex) => {
        if (secIndex === index) {
          secImage.classList.add("highlighted");
        } else {
          secImage.classList.remove("highlighted");
        }
      });
    }

    prevBtn.addEventListener("click", function () {
      currentImageIndex =
        (currentImageIndex - 1 + featuredImages.length) % featuredImages.length;
      currentImage.src = featuredImages[currentImageIndex];
      highlightSecondaryImage(currentImageIndex);
    });

    nextBtn.addEventListener("click", function () {
      currentImageIndex = (currentImageIndex + 1) % featuredImages.length;
      currentImage.src = featuredImages[currentImageIndex];
      highlightSecondaryImage(currentImageIndex);
    });
  });
  outPut += `
  <div class="buttons">
    <button id="prev-btn">
      <img src="/Images/icons8-chevron-left-100.png" alt="" />
    </button>
    <button id="next-btn">
      <img src="/Images/icons8-chevron-left-100.png" alt="" />
    </button>
  </div>
</div>
`;

  return outPut;
}

function secondary() {
  let secImages = [
    { title: "Elden Ring", link: "/images/elden.jpg", highlight: true },
    { title: "Darkwood", link: "/images/Darkwood.jpg" },
    { title: "Borderlands3", link: "/images/bl3.jpg" },
    { title: "Dark Souls III", link: "/images/ds3.jpg" },
    { title: "Fortnite", link: "/images/fort.jpg" },
    { title: "Call Of Duty", link: "/images/cod2.jpg" },
  ];
  let outPut = '<div class="sec-images">';
  secImages.forEach((image,index) => {
    let highlight;
    if (index == 0) {
      highlight = "highlighted"
    } else {
      highlight = "";
    }
    outPut += `
    <a href="index.html" class="${highlight}">
      <img src="${image.link}" alt="" class="" />
      <p>${image.title}</p>
    </a>
    `;
  });
  outPut += "</div>";
  return outPut;
}
export default homepage;
