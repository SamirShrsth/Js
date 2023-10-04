import footer from "./footer.js";
function news() {
  let outPut = `<section>
  <div class="container">
      <div class="top-feature">
          <h1>The Biggest Gaming News For January 27, 2023</h1>
          <p>HBO's The Last of Us is getting a second season and Amazon is working on a Tomb Raider TV show.</p>
          <p>BY <a href=""> JOSHUA ROBERTSON</a></p>
      </div>
      <div id="slider">
              <img src="/Images/post.png">
      </div>
      <div class="dual">
          <div class="news-content">
              <p>It's finally the weekend, which means you can kick back and take a load off with a good video game or TV show. Speaking of TV shows, after weeks of speculation, HBO has confirmed that The Last of Us will be getting a second season despite only being two episodes deep so far.</p>
              <p>Elsewhere in the streaming world, it's been reported that Amazon has a Tomb Raider series in production, while Wizards of the Coast has cancelled its controversial plans to make changes to D&D's Open Games License. For all the details, keep reading.</p>
          </div>
          <div class="ad">
              <img src="/Images/AD1.jpg" alt="">
          </div>
      </div>
      <div class="related-content">
          <span>Related:</span>
          <p>The Last Of Us TV Show Changed Tess For The Worse</p>
          <br>
      </div>
      <div class="main-content">
          <div class="los">
              <img src="/Images/mk1.jpg" alt="">
          </div>
          <div class="los-content">
              <h2>Ed Boon Teases More DLC Characters for Mortal Kombat 1</h2>
              <p>Mortal Kombat 1 creative director Ed Boon once again takes to social media to tease fans with additional potential downloadable content including some highly requested horror icons. Following its highly anticipated release, Mortal Kombat 1 has already seen a lot of success including positive reviews from critics as well as strong word of mouth from the community at large. Of course, the launch is only the start as Ed Boon and NetherRealm Studios have long teased that plenty more content is planned for the long haul.</p>
              <br>
              <p>Downloadable content and updates are nothing new for the Mortal Kombat franchise as the previous game not only brought new characters but a dedicated expansion which ultimately set the stage for the MK1 campaign. To this point, fans are already aware of the first Kombat Pack for Mortal Kombat 1, which includes some returning fighters like Ermac, Takeda, and Quan Chi, but also sees notable guest characters like Omni-Man, Homelander, and Peacemaker. However, there seems to be more on the horizon as NetherRealm's creative direct Ed Boon continues to tease fans with cryptic messages over social media.</p>
              <br>
              <p>Taking to X, Ed Boon posted an image comprised of many horror character icons like Freddy, Jason, Jigsaw, Pinhead, and more. The image features a series of green check marks and question marks with a simple caption that only uses two emojis: a dragon and a thinking face. Naturally, many have already begun to speculate that the image teases additional guest characters for Mortal Kombat 1, especially since the green checkmarks are over ones that have already been included within the series.<p>
          </div>
          <br>
          <div class="los">
              <img src="/Images/nintendo.jpg" alt="">
          </div>
          <div class="los-content">
              <h2>Another Iconic RPG is Now Available on Nintendo Switch</h2>
              <p>Gothic Classic is now available for purchase on the Nintendo Switch. The Switch port of the iconic RPG that inspired The Witcher 3 and dozens of other games was originally announced in early August.</p>
              <br>
              <p>More than 22 years since its release, Gothic's legacy is still influencing Piranha Bytes' games. And while the German studio is nowadays pursuing other projects, THQ Nordic assigned the Gothic franchise to Alkimia Interactive, Piranha Bytes' sister company founded in 2020 with the specific purpose of reviving the iconic series. Since then, the Barcelona-based studio was largely focused on the upcoming remake of the original game, whereas this Switch port of Gothic came a bit out of the blue.</p>
              <br>
              <p>Two months since its surprise announcement, Gothic Classic is now available to play on Nintendo's hybrid console. The digital version of the RPG can be downloaded from the Switch eShop, while a physical copy can be ordered directly from THQ Nordic. Both are priced at $29.99, not accounting for the shipping costs attached to the boxed edition.</p>
          </div>
          <br>
          <div class="los">
              <img src="/Images/wow.jpg" alt="">
          </div>
          <div class="los-content">
              <h2>World of Warcraft Patch 10.2 Makes Change to Stormwind That Was Five Years in the Making</h2>
              <p>World of Warcraft is finally moving the Night Elf and Worgen refugees out of Stormwind in Patch 10.2, Guardians of the Dream. After five years, these displaced World of Warcraft NPCs are finally getting the chance to go home.</p>
              <br>
              <p>One of the inciting incidents of the Battle for Azeroth expansion in 2018 was the Burning of Teldrassil. During the attack, the Alliance city of Darnassus, and the Night Elf starting zone that surrounded it, were destroyed. Since Gilneas was lost at the end of their starting experience, many Worgen also lived in Darnassus, forcing them and their Night Elf allies to become refugees in Stormwind.</p>
              <br>
              <p>Now, it seems like the Night Elf and Worgen refugees are finally leaving Stormwind. In a recent build of the World of Warcraft Patch 10.2 Public Test Realm, the numerous Darnassian Refugees, Displaced Gilnean Refugees, and Stormwind City Clerks who help them have been removed from the city. This immigration is made possible due to the events of Guardians of the Dream, in which the Night Elves are hoping to make a new home at Amirdrassil.</p>
          </div>
          <br>  
          <div class="author">
              <h3>About The Author:</h3>
              <p><a href="">Joshua Robertson</a> (1443 Articles Published)</p>
              <p>Joshua Robertson is a News Editor for TheGamer. When not playing Pokemon or scaring himself silly with the latest horror games, he can usually be found begging FromSoftware for a Bloodborne remaster.</p>
          </div>
      </div>`;
  outPut += footer();
  outPut += `</div>
    </section>`;

  return outPut;
}
export default news;
