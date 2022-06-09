import imgSnakeGame from "../assets/img-portfolio/imgSnakeGame.jpg";
import imgCDOS94 from "../assets/img-portfolio/imgCDOS94.jpg";
import imgBurgerCode from "../assets/img-portfolio/BurgerCode.png";
import imgMyMoviz from "../assets/img-portfolio/imgmymoviz.png";
import imgZaraBowl from "../assets/img-portfolio/zaratest.png";
import imgWeatherApp from "../assets/img-portfolio/imgWeatherApp.png";
import imgBikeShop from "../assets/img-portfolio/imgBikeShop.png";
import imgMorningNews from "../assets/img-portfolio/imgMorningNews.png";
import imgCloneNetflix from "../assets/img-portfolio/cloneNetflix.png";
const portfolios = [
  {
    id: 1,
    category: "JavaScript",
    image: imgSnakeGame,
    link1: "http://test.infotest547.fr",
    link2: "https://github.com/Do-moi/snake-javascript",
    title: "Snake",
    text: "Jeu entièrement créé avec du HTML, JavaScript et CSS.",
  },
  {
    id: 2,
    category: "PHP",
    image: imgBurgerCode,
    link1: "http://burgercode.infotest547.fr",
    link2: "https://github.com/Do-moi/burgerCode",
    title: "Burger code",
    text:
      "Site de vente de Burger avec un systeme d'administration. " +
      "Construit avec : BOOTSTRAP, PHP, MYSQL. ",
  },

  {
    id: 3,
    category: "React",
    image: imgCloneNetflix,
    link1: "https://clonenetflixreact.herokuapp.com/",
    link2: "https://github.com/Do-moi/netflix-clone-react",
    title: "Clone NETFLIX",
    text: "Clone du site netflix construit avec : React , API the movie database .",
  },
  {
    id: 4,
    category: "React",
    image: imgMyMoviz,
    link1: "https://mymovizreact.herokuapp.com/",
    link2: "https://github.com/Do-moi/myMovizReact",
    title: "MyMoviz",
    text: `MyMoviz est un site qui va vous permettre d’afficher les 20 dernier films les plus populaires avec la possibilité de créer une wishlist et de donner une évaluation de chacun des films présentés.
     stack technique: React, React Strap, Node.js, API the movie database `,
  },
  {
    id: 5,
    category: "Wordpress",
    image: imgCDOS94,
    link1: "https://www.cdos94.org/",
    link2: "https://www.cdos94.org/",
    title: "CDOS 94",
    text: `Site du comité départemental olympique sportif du val de marne.\t
    Wordpress, PHP, Mysql`,
  },
  {
    id: 6,
    category: "React Native",
    image: imgZaraBowl,
    link1:
      "https://drive.google.com/file/d/1I75ldoUg6S_AmHi5YQ32mfkao0PYiNqI/view",
    link2: "https://github.com/Do-moi/zara-bowl-reactNative",
    title: "ZaraBowl",
    text: "Application mobile e-commerce permettant d'acheter des boules de bowling. utilisant: react native, expo, redux, api stripe, reactstrap, MongoDB, Node.js ",
  },
  {
    id: 7,
    category: "Express",
    image: imgWeatherApp,
    link1: "https://weatherappexpress.herokuapp.com/",
    link2: "https://github.com/Do-moi/weather-app",
    title: "WeatherApp",
    text: "Weather App est une application qui va vous permettre d’afficher la météo de villes que vous aurez préalablement saisies. utilisant les API Open Weather Map et Leaflet . stack: bootstrap, Node.js, Express, MongoDB",
  },
  {
    id: 8,
    category: "Express",
    image: imgBikeShop,
    link1: "https://bikeshopexpress.herokuapp.com/",
    link2: "https://github.com/Do-moi/bikeShopExpress",
    title: "Bike-Shop",
    text: "Bike shop est un site de E-commerce stack: bootstrap, Node.js, Express, Stripe",
  },
  {
    id: 9,
    category: "React",
    image: imgMorningNews,
    link1: "https://morningnewsreact.herokuapp.com/",
    link2: "https://github.com/Do-moi/morning-news-react",
    title: "Morning news",
    text: "Morning News est une application web qui permet d’afficher les news actualisées et de les mettre dans une wishlist pour les sauvegarder en base de données et les lire plus tard.",
  },
];

export default portfolios;
