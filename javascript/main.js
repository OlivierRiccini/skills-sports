class Player {
  constructor(firstName, lastName, yearOfBirth, currentClub, position, nationality, num, goals, photo) {
    this._firstName = firstName,
    this._lastName = lastName,
    this._yearOfBirth= yearOfBirth,
    this._currentClub = currentClub,
    this._position = position,
    this._nationality = nationality,
    this._num = num,
    this._goals = goals,
    this._photo = photo
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get yearOfBirth() {
    return this._yearOfBirth;
  }

  get currentClub() {
    return this._currentClub;
  }

  get position() {
    return this._position;
  }

  get nationality() {
    return this._nationality;
  }

  get num() {
    return this._num;
  }

  get goals() {
    return this._goals;
  }

  get photo() {
    return this._photo;
  }
}

/*PROJECTS NEW OBJECTS*/

const players = [];

const YThuram = new Player(
  "Yohann",
  "Thuram",
  "1988",
  "Le Havre AC",
  "GKP",
  "France",
  "20",
  0,
  "images/thuram.jpg"
);

players.push(YThuram);

const FRaspentino = new Player(
  "Florian",
  "Raspentino",
  "1989",
  "Kas Eupen",
  "FWD",
  "France",
  "9",
  2,
  "images/raspentino.png"
);

players.push(FRaspentino);

const QBraat = new Player(
  "Quentin",
  "Braat",
  "1997",
  "FC Nantes",
  "GKP",
  "France",
  "",
  0,
  "images/braat.jpg"
);

players.push(QBraat);

const BMazikou = new Player(
  "Bradley",
  "Mazikou",
  "1996",
  "USL Dunkerque",
  "DEF",
  "France, Congo",
  "16",
  0,
  "images/mazikou.jpg"
);

players.push(BMazikou);

const MZeffane = new Player(
  "Mehdi",
  "Zeffane",
  "1992",
  "Rennes",
  "DEF",
  "France, Algeria",
  "10",
  0,
  "images/zeffane.jpg"
);

players.push(MZeffane);

const HElKarabri = new Player(
  "H",
  "El Karabri",
  "2000",
  "Anderlecht U19",
  "DEF",
  "Belgium, Marocco",
  "3",
  0,
  "images/el-karabri.png"
);

players.push(HElKarabri);

const SPrcić = new Player(
  "Sanjin",
  "Prcić",
  "1993",
  "Rennes",
  "MID",
  "France, Bosnia",
  "13",
  1,
  "images/prcic.jpg"
);

players.push(SPrcić);

const FLajugie = new Player(
  "François",
  "Lajugie",
  "1996",
  "Limoges",
  "MID",
  "France",
  "10",
  2,
  "images/lajugie.jpeg"
);

players.push(FLajugie);

const EMassouema = new Player(
  "Eden",
  "Massouema",
  "1997",
  "Dijon",
  "MID",
  "France",
  "2",
  0,
  "images/massouema.jpg"
);

players.push(EMassouema);

const TVialla = new Player(
  "Thibault",
  "Vialla",
  "1996",
  "Ajaccio",
  "FWD",
  "France",
  "18",
  2,
  "images/vialla.jpg"
);

players.push(TVialla);

const playersSection = document.querySelector('.players-section');

players.forEach(function(player){
  playersSection.insertAdjacentHTML('afterbegin',
    `<div class="col-xs-12 col-sm-6 col-md-4">
      <div class="player-card">
        <div class="player-photo" style="background-image: url(${player.photo})">
          <span class="player-num">${player.num}</span>
        </div>
        <div class="player-info">
          <p class="player-name"><strong>${player.firstName[0].toUpperCase()}.${player.lastName.toUpperCase()}</strong></p>
          <p>Year of birth: ${player.currentClub} - Nationality: ${player.position}</p>
          <p>Year of birth: ${player.yearOfBirth} - Nationality: ${player.nationality}</p>
        </div>
      </div>
    </div>`);
  if (player.goals != 0) {
    const playerInfo = document.querySelector('.player-info');
    playerInfo.insertAdjacentHTML('beforeend', `<p>Goals: ${player.goals}</p>`);
  }
});

// /* Carousel */

// /* Implement Slick function */
// $('.slider').slick({
//   arrows: false,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   infinite: true,
//   speed: 1000,
//   responsive: [
//     {
//       breakpoint: 1000,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: true,
//         speed: 1000
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true
//       }
//     }
//   ]
// });

// /* Apply style to side images*/
// function sideImages() {
//   const active = document.querySelectorAll('.slick-active');
//   const makeClickable = document.querySelectorAll('.slick-active .item-carousel');
//   makeClickable[0].insertAdjacentHTML('afterbegin', `<div class="clickable leftClickable"></div>`);
//   makeClickable[makeClickable.length - 1].insertAdjacentHTML('afterbegin', `<div class="clickable rightClickable"></div>`);

//   active.forEach(function(card) {
//     if( card == active[active.length - 1] || card == active[0] ) {
//       card.style.transition = 'all 1s';
//       card.style.opacity = '0.2';
//       card.querySelector('.item-carousel').style.margin = '0 auto';
//       card.style.paddingTop = '10px'; // modified
//       card.style.paddingBottom = '10px'; // modified

//     } else {
//       card.style.opacity = '1';
//       card.querySelector('.item-carousel').style.margin = '0';
//       card.style.paddingTop = '0';
//     }
//   });

//   $('.leftClickable').click(function(){
//       $('.slider').slick('slickPrev');
//       $('div').remove('.clickable');
//       sideImages();
//     })

//   $('.rightClickable').click(function(){
//       $('.slider').slick('slickNext');
//       $('div').remove('.clickable');
//       sideImages();
//   })
// }

// sideImages();





