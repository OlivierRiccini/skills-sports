/* Change language */
const navbar = document.getElementById('list-english-navbar');
const customDropdown = document.getElementById('list-english-dropdown');
const whatWeDo = document.querySelector('.what-we-do');
const whoWeAre = document.querySelector('.who-we-are');
const portfolio = document.querySelector('.portfolio h2');
const contact = document.querySelector('.contact');

function languageChoice(language) {
  if ( language === "english" ) {
    navbar.innerHTML = `<li><a class="cool-link" href="#what-we-do">WHAT WE DO</a></li>
                        <li><a class="cool-link" href="#portfolio">PORTFOLIO</a></li>
                        <li><a class="cool-link" href="#who-we-are">WHO WE ARE</a></li>
                        <li><a class="cool-link" href="#contact">CONTACT</a></li>`;

    customDropdown.innerHTML = `<li><a href="#what-we-do">WHAT WE DO</a></li>
                                <li><a href="#portfolio">PORTFOLIO</a></li>
                                <li><a href="#who-we-are">WHO WE ARE</a></li>
                                <li><a href="#contact">CONTACT</a></li>
                                <li><a href="#">CONTACT</a></li>`;

    whatWeDo.innerHTML = `<div class="container">
                            <h2>What we do</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.</p>
                          </div>`;


    whoWeAre.innerHTML = `<div class="container">
                            <h2>What we do</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.</p>
                          </div>`;

    portfolio.innerText = `OUR PLAYERS`

  } else if ( language === "french" ) {
    navbar.innerHTML = `<li><a class="cool-link" href="#what-we-do">NOTRE METIER</a></li>
                        <li><a class="cool-link" href="#portfolio">PORTFOLIO</a></li>
                        <li><a class="cool-link" href="#who-we-are">QUI NOUS SOMMES</a></li>
                        <li><a class="cool-link" href="#contact">CONTACT</a></li>`;

    customDropdown.innerHTML = `<li><a href="#what-we-do">NOTRE METIER</a></li>
                                <li><a href="#portfolio">PORTFOLIO</a></li>
                                <li><a href="#who-we-are">QUI NOUS SOMMES</a></li>
                                <li><a href="#contact">CONTACT</a></li>
                                <li><a href="#">CONTACT</a></li>`;

    whatWeDo.innerHTML = `<div class="container">
                            <h2>NOTRE METIER</h2>
                            <p>Lorem Ipsum en français is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages.</p>
                          </div>`;

    whoWeAre.innerHTML = `<div class="container">
                            <h2>QUI NOUS SOMMES</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.</p>
                          </div>`

    portfolio.innerText = `NOS JOUEURS`
  }
}

const frenchFlags = document.querySelectorAll('.france-flag');
const englishFlags = document.querySelectorAll('.gb-flag');


frenchFlags.forEach(function(flag) {
  flag.addEventListener('click', function() {
    languageChoice("french");
  })
})

englishFlags.forEach(function(flag) {
  flag.addEventListener('click', function() {
    languageChoice("english");
  })
})

/* Class player */

class Player {
  constructor(firstName, lastName, yearOfBirth, currentClub, position, nationalities, num, goals, photo, sofascoreUrl) {
    this._firstName = firstName,
    this._lastName = lastName,
    this._yearOfBirth= yearOfBirth,
    this._currentClub = currentClub,
    this._position = position,
    this._nationalities = nationalities,
    this._num = num,
    this._goals = goals,
    this._photo = photo,
    this._sofascoreUrl = sofascoreUrl
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

  get sofascoreUrl() {
    return this._sofascoreUrl;
  }
}

/* New players */

const players = [];

const YThuram = new Player(
  "Yohann",
  "Thuram",
  "1988",
  "Le Havre AC",
  "GKP",
  [ "france" ],
  "16",
  0,
  "images/thuram.jpg",
  "#"
);

players.push(YThuram);

const FRaspentino = new Player(
  "Florian",
  "Raspentino",
  "1989",
  "Kas Eupen",
  "FWD",
  [ "france" ],
  "19",
  2,
  "images/raspentino.png",
  "https://www.sofascore.com/fr/joueurs/florian-raspentino/101618"
);

players.push(FRaspentino);

const QBraat = new Player(
  "Quentin",
  "Braat",
  "1997",
  "FC Nantes",
  "GKP",
  [ "france" ],
  "40",
  0,
  "images/braat.jpg",
  "#"
);

players.push(QBraat);

const BMazikou = new Player(
  "Bradley",
  "Mazikou",
  "1996",
  "USL Dunkerque",
  "DEF",
  [ "france", "congo" ],
  "3",
  0,
  "images/mazikou.jpg",
  "#"
);

players.push(BMazikou);

const MZeffane = new Player(
  "Mehdi",
  "Zeffane",
  "1992",
  "Rennes",
  "DEF",
  [ "france", "algeria" ],
  "2",
  0,
  "images/zeffane.jpg",
  "#"
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
  "images/el-karabri.png",
  "#"
);

players.push(HElKarabri);

const SPrcić = new Player(
  "Sanjin",
  "Prcić",
  "1993",
  "Rennes",
  "MID",
  [ "france", "bosnia" ],
  "10",
  1,
  "images/prcic.jpg",
  "#"
);

players.push(SPrcić);

const FLajugie = new Player(
  "François",
  "Lajugie",
  "1996",
  "Limoges",
  "MID",
  [ "france" ],
  "8",
  2,
  "images/lajugie.jpeg",
  "#"
);

players.push(FLajugie);

const EMassouema = new Player(
  "Eden",
  "Massouema",
  "1997",
  "Dijon",
  "MID",
  [ "france" ],
  "21",
  0,
  "images/massouema.jpg",
  "#"
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
  "images/vialla.jpg",
  "#"
);

players.push(TVialla);

/* Generate player cards */

const playersSection = document.querySelector('.players-section');

players.forEach(function(player){
  playersSection.insertAdjacentHTML('afterbegin',
    `<a class="sofascore-link" href="${player.sofascoreUrl}" target="_blank">
      <div class="player-card">
        <div class="player-photo" style="background-image: url(${player.photo})">
          <span class="player-num">${player.num}</span>
        </div>
        <span class="details">DETAILS</span>
        <div class="player-info">
          <p class="player-name"><strong>${player.firstName} ${player.lastName.toUpperCase()}</strong></p>
          <p class="player-club">${player.currentClub} - ${player.position}</p>
          <div class="player-life">
            <p>${player.yearOfBirth}</p>
            <div class="flags-container"></div>
          </div>
        </div>
      </div>
    </a>
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
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 630,
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

//////////////////////////////////////////////////
/* Responsive navbar, changing color */

function navPosition() {
const navBar = document.querySelector('.navbar');
const customdropdown = document.getElementById('icon-dropdown');
const navItem = document.querySelectorAll('.navbar li a');
  var rect = whatWeDo.getBoundingClientRect();
  if ( rect.top < 140 ) {
      navBar.style.backgroundColor = `rgba(255,255,255,0.95)`;
      customdropdown.style.color = `#0a4e80`;
      navItem.forEach(function(a) {
      a.style.color = `#0a4e80`;
    });
  }
  if ( rect.top > 140 ) {
    navBar.style.backgroundColor = `transparent`;
    navItem.forEach(function(a) {
      a.style.color = `rgba(255,255,255,0.9)`;
    });
  }

/* For dropdown menu */
  if ( rect.top < 110 ) {
    customdropdown.style.color = `#0a4e80`;
  }
  if ( rect.top > 110 ) {
    customdropdown.style.color = `rgba(255,255,255,0.9)`;
  }
}

window.addEventListener("scroll", navPosition);

$('#icon-dropdown').click(function(){
  $('#list-dropdown').slideToggle();
});

/* loading page */
setTimeout(function(){$('.loading-page').fadeOut('slow');}, 3000);
