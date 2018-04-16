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
                        <li><a class="cool-link" href="#who-we-are">WHO WE ARE</a></li>
                        <li><a class="cool-link" href="#portfolio">PORTFOLIO</a></li>
                        <li><a class="cool-link" href="#contact">CONTACT</a></li>`;

    customDropdown.innerHTML = `<li><a href="#what-we-do">WHAT WE DO</a></li>
                                <li><a href="#who-we-are">WHO WE ARE</a></li>
                                <li><a href="#portfolio">PORTFOLIO</a></li>
                                <li><a href="#contact">CONTACT</a></li>`;

    whatWeDo.innerHTML = `<h2>What we do</h2>
                          <div class="row">
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><img src="images/soccer-ball.svg" alt="icon-soccer-ball" width="30">
                                &nbsp;&nbsp;Carrer builder
                                </h4>
                                <p>We ensure that our clients find the right clubs
                                  to help them develop both professionally and personally.
                                  We take great pride in securing the right deals for
                                  our athletes. Contract negotiation is our speciality.</p>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><img src="images/jersey.svg" alt="icon-soccer-jersey" width="30">
                                &nbsp;&nbsp;Sponsors and Marketing
                                </h4>
                                <p>Our team has great contacts across major brands
                                to help our athletes secure endorsement and sponsorship
                                deals, as well as become ambassadors for the causes
                                that they believe in.</p>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><i class="fa fa-desktop" style="font-size: 30px"></i>&nbsp;&nbsp;
                                Communication and branding</h4>
                                <p>Our Media experts work with our athletes to ensure
                                that they make the most out of their brand by building
                                a strong media presence to ensure their true personalities
                                shine through.</p>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><span style="font-size: 30px; font-weight: bold;">$</span>&nbsp;&nbsp;
                                Financial Advisory</h4>
                                <p>Our partnership with the bests accounting firms ensures
                                our clients receive the correct advice and planning for
                                their financial futures.</p>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><i class="fa fa-home" style="font-size: 30px"></i>
                                &nbsp;&nbsp;Lifestyle Assistance</h4>
                                <p>We know that an athlete’s best performances come
                                when everything off-the-field is taken care of so we
                                offer advice and assistance on troublesome issues like
                                moving house or tax optimization.</p>
                              </div>
                            </div>
                          </div>`;


    whoWeAre.innerHTML = `<div class="row">
                            <h2>Who we are</h2>
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

    portfolio.innerText = `Our players`

  } else if ( language === "french" ) {
    navbar.innerHTML = `<li><a class="cool-link" href="#what-we-do">NOTRE RÔLE</a></li>
                        <li><a class="cool-link" href="#who-we-are">QUI SOMMES NOUS</a></li>
                        <li><a class="cool-link" href="#portfolio">PORTFOLIO</a></li>
                        <li><a class="cool-link" href="#contact">CONTACT</a></li>`;

    customDropdown.innerHTML = `<li><a href="#what-we-do">NOTRE RÔLE</a></li>
                                <li><a href="#who-we-are">QUI SOMMES NOUS</a></li>
                                <li><a href="#portfolio">PORTFOLIO</a></li>
                                <li><a href="#contact">CONTACT</a></li>`;

    whatWeDo.innerHTML = `<h2>Notre rôle</h2>
                          <div class="row">
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><img src="images/soccer-ball.svg" alt="icon-soccer-ball" width="30">&nbsp;&nbsp;
                                Construction de carrière
                                </h4>
                                <p>Nos joueurs ne sont pas seulement des clients.
                                Ils sont les membres essentiels d’une équipe à qui
                                nous voulons offrir le meilleur.
                                L’objectif de Skills Sports Management reste
                                toujours le même, peu importe le client, son CV ou
                                sa situation : nous travaillons chaque jour pour
                                l’aider à progresser dans sa carrière. En négociant
                                pour lui les meilleurs contrats, en anticipant ses
                                projets d’avenir, en améliorant son image et en
                                gérant sa communication. Car pour pouvoir se
                                concentrer uniquement sur le terrain, un joueur se
                                doit d’être accompagné.</p>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><img src="images/jersey.svg" alt="icon-soccer-jersey" width="30">&nbsp;&nbsp;
                                Marketing
                                </h4>
                                <p>Skills Sports Management possède un réseau
                                d’équipementiers sportifs pour permettre à ses joueurs
                                d’obtenir des partenariats et de conclure des contrats
                                d’amabassadeurs afin de défendre les causes auxquels
                                ils croient.</p>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><i class="fa fa-desktop" style="font-size: 30px"></i>&nbsp;&nbsp;
                                Communication et medias</h4>
                                <p>Nos experts des medias accompagnent les joueurs pour
                                optimiser leur image. Chaque joueur est une marque qu’il
                                faut protéger, développer et faire briller, aussi bien
                                dans les relations avec les journalistes que sur les
                                réseaux sociaux.</p>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><span style="font-size: 30px; font-weight: bold;">$</span></i>&nbsp;&nbsp;
                                Gestion du patrimoine</h4>
                                <p>Notre partenariat avec un grand cabinet d’expertise
                                comptable assure à nos joueurs de recevoir les meilleurs
                                conseils afin de sécuriser et d’anticiper leur après carrière.</p>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="box">
                                <h4><i class="fa fa-home" style="font-size: 30px"></i>&nbsp;&nbsp;
                                Vie quotidienne</h4>
                                <p>Nous savons que les meilleures performances surviennent
                                lorsque tout ce qui se passe hors du terrain est sous
                                contrôle. 24 heures sur 24, 7 jours sur 7, 365 jours
                                par an, nous sommes toujours à votre écoute pour vous
                                aider dans vos démarches. Parce qu’il n’y a pas de
                                problème mais uniquement des solutions, notre service
                                de conciergerie permet d’organiser un déménagement,
                                d’acheter une nouvelle voiture ou encore de réserver
                                des places pour les play-offs de NBA.</p>
                              </div>
                            </div>
                          </div>`;

    whoWeAre.innerHTML = `<h2>Qui sommes nous</h2>
                          <div class="box">
                            <p>Skills Sports Management est une société internationale
                            de gestion de carrière sportive. Créée en 2014 par
                            Anthony Perrin, agent licencié à la Fédération Française
                            de Football, SSM a construit un vaste réseau de partenaires
                            à travers le monde.</p>
                            <br>
                            <p>Se concentrant sur la représentation de footballeurs
                            et d’entraîneurs professionnels, la société couvre tous
                            les aspects pertinents pour la réussite des sportifs
                            de haut niveau: suivi médical, gestion financière,
                            conseil juridique et maîtrise de la communication.</p>
                            <br>
                            <p>Notre équipe est composée d'avocats, de fiscalistes,
                            d'attachés de presse, de médecins, de préparateurs
                            physiques et d'un nutritionniste. Tous unis pour gérer
                            votre présent et bâtir votre avenir.</p>
                          </div>`

    portfolio.innerText = `Nos joueurs`
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
  constructor(firstName, lastName, yearOfBirth, currentClub, position, nationalities, num, photo, sofascoreUrl) {
    this._firstName = firstName,
    this._lastName = lastName,
    this._yearOfBirth= yearOfBirth,
    this._currentClub = currentClub,
    this._position = position,
    this._nationalities = nationalities,
    this._num = num,
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
  "images/thuram.jpg",
  "https://www.sofascore.com/fr/joueurs/yohann-thuram/39049"
);

players.push(YThuram);


const QBraat = new Player(
  "Quentin",
  "Braat",
  "1997",
  "FC Nantes",
  "GKP",
  [ "france" ],
  "40",
  "images/braat.jpg",
  "https://www.sofascore.com/fr/joueurs/quentin-braat/826568"
);

players.push(QBraat);

const GChetaneau = new Player(
  "Grégoire",
  "Chetaneau",
  "2000",
  "FC Nantes",
  "DEF",
  [ "france" ],
  "5",
  "images/chetaneau.jpg",
  "https://www.sofascore.com/player/gregoire-chetaneau/921359"
);

players.push(GChetaneau);


const MZeffane = new Player(
  "Mehdi",
  "Zeffane",
  "1992",
  "Rennes",
  "DEF",
  [ "france", "algeria" ],
  "2",
  "images/zeffane.jpg",
  "https://www.sofascore.com/fr/joueurs/mehdi-zeffane/217770"
);

players.push(MZeffane);

const BMazikou = new Player(
  "Bradley",
  "Mazikou",
  "1996",
  "USL Dunkerque",
  "DEF",
  [ "france", "congo" ],
  "3",
  "images/mazikou.jpg",
  "https://www.sofascore.com/fr/joueurs/bradley-mazikou/840392"
);

players.push(BMazikou);


const HElKarabri = new Player(
  "Hotman",
  "El Karabri",
  "2000",
  "Anderlecht U19",
  "DEF",
  [ "belgium", "morocco" ],
  "4",
  "images/el-Karabri.jpg",
  "https://www.sofascore.com/fr/joueurs/el-kababri-hotman/901896"
);

players.push(HElKarabri);

const MThevenin = new Player(
  "Mathis",
  "Thevenin",
  "2000",
  "FC Nantes",
  "MID",
  [ "france" ],
  "6",
  "images/thevenin.jpg",
  "https://www.transfermarkt.co.uk/mathis-thevenin/profil/spieler/475524"
);

players.push(MThevenin);

const SPrcić = new Player(
  "Sanjin",
  "Prcić",
  "1993",
  "Rennes",
  "MID",
  [ "france", "bosnia" ],
  "10",
  "images/prcic.jpg",
  "https://www.sofascore.com/fr/joueurs/sanjin-prcic/94822"
);

players.push(SPrcić);

const EMassouema = new Player(
  "Eden",
  "Massouema",
  "1997",
  "Dijon",
  "MID",
  [ "france" ],
  "21",
  "images/massouema.jpg",
  "https://www.sofascore.com/fr/joueurs/eden-massouema/846498"
);

players.push(EMassouema);


const FLajugie = new Player(
  "François",
  "Lajugie",
  "1996",
  "Limoges",
  "MID",
  [ "france" ],
  "8",
  "images/lajugie.jpeg",
  "#"
);

players.push(FLajugie);

const FRaspentino = new Player(
  "Florian",
  "Raspentino",
  "1989",
  "Kas Eupen",
  "FWD",
  [ "france" ],
  "19",
  "images/raspentino.png",
  "https://www.sofascore.com/fr/joueurs/florian-raspentino/101618"
);

players.push(FRaspentino);

const TVialla = new Player(
  "Thibault",
  "Vialla",
  "1996",
  "Ajaccio",
  "FWD",
  [ "france" ],
  "18",
  "images/vialla.jpg",
  "https://www.sofascore.com/fr/joueurs/thibault-vialla/792440"
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
