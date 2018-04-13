class Player {
  constructor(firstName, lastName, yearOfBirth, currentClub, position, nationalities, num, goals, photo) {
    this._firstName = firstName,
    this._lastName = lastName,
    this._yearOfBirth= yearOfBirth,
    this._currentClub = currentClub,
    this._position = position,
    this._nationalities = nationalities,
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

  get nationalities() {
    return this._nationalities;
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
  [ "france" ],
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
  [ "france" ],
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
  [ "france" ],
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
  [ "france", "congo" ],
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
  [ "france", "algeria" ],
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
  [ "belgium", "morocco" ],
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
  [ "france", "bosnia" ],
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
  [ "france" ],
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
  [ "france" ],
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
  [ "france" ],
  "18",
  2,
  "images/vialla.jpg"
);

players.push(TVialla);

const playersSection = document.querySelector('.players-section');

players.forEach(function(player){
  playersSection.insertAdjacentHTML('afterbegin',
    `
      <div class="player-card">
        <div class="player-photo" style="background-image: url(${player.photo})">
          <span class="player-num">${player.num}</span>
        </div>
        <div class="player-info">
          <p class="player-name"><strong>${player.firstName[0].toUpperCase()}.${player.lastName.toUpperCase()}</strong></p>
          <p class="player-club">${player.currentClub} - ${player.position}</p>
          <div class="player-life">
            <p>${player.yearOfBirth}</p>
            <div class="flags-container"></div>
          </div>
        </div>
      </div>
    `);
  if (player.goals != 0) {
    const playerInfo = document.querySelector('.player-info');
    playerInfo.insertAdjacentHTML('beforeend', `<div class="player-goals">${player.goals}<img src="images/soccer-ball.svg" alt="soccer-ball"/></div>`);
  }

  const playerLife = document.querySelector('.flags-container');

  player.nationalities.forEach(function(nationality){
    playerLife.insertAdjacentHTML('afterbegin', `<img class="flags" src="flags/${nationality}.svg" alt="${nationality}-flag" />`);
  });
});

/* Carousel */

$('.players-section').slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


const dots = document.querySelectorAll('.slick-dots li button');

dots.forEach(function(dot) {
  dot.innerHTML = '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>';
});

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





