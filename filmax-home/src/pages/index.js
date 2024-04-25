import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header id="header">
        <img src="/assets/images/logo.webp" class="logo" />
        <img />
        <nav class="center-menu">
          <ul>
            <li>
              <a class="center-menu-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="center-menu-link" href="#">
                Features
              </a>
            </li>
            <li>
              <a class="center-menu-link" href="#">
                About
              </a>
            </li>
            <li>
              <a class="center-menu-link" href="#">
                News
              </a>
            </li>
            <li>
              <a class="center-menu-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        <nav class="right-menu">
          <ul>
            <div class="search">
              <button class="search-button">
                <img src="assets/icons/search.svg" alt="Search" />
                <img />
              </button>
            </div>

            <span class="separador">
              <img src="assets/icons/separator.svg" alt="Separador" /> <img />
            </span>

            <li>
              <a href="">
                <svg
                  class="twitter-icon"
                  width="24"
                  height="24"
                  viewBox="0 -2 20 20"
                  version="1.1"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-60.000000, -7521.000000)"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                          id="twitter-[#154]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>

            <li>
              <a href="">
                <svg
                  class="facebook-icon"
                  width="24"
                  height="24"
                  viewBox="-5 0 20 20"
                  version="1.1"
                >
                  <g id="Page-1" fill-rule="evenodd">
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-385.000000, -7399.000000)"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                          id="facebook-[#176]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>

            <li>
              <a href="">
                <svg
                  class="instagram-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  />
                  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a href="">
                <svg
                  class="youtube-icon"
                  width="24"
                  height="24"
                  viewBox="0 -3 20 20"
                  version="1.1"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-300.000000, -7442.000000)"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                          id="youtube-[#168]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <a href="#header">
          <button class="scroll-button">
            <div class="scroll-button-box">
              <span class="button-elem">
                <img src="assets/icons/scrollup.svg" alt="Scroll up" />
                <img />
              </span>
              <span class="button-elem">
                <img src="assets/icons/scrollup.svg" alt="Scroll up" />
                <img />
              </span>
            </div>
          </button>
        </a>

        <div class="right-panel">
          <ul>
            <li class="button-borders">
              <button>
                <img src="assets/icons/buy.svg" alt="Buy theme" />
                <img />
              </button>
            </li>
            <li class="button-borders">
              <button>
                <img src="assets/icons/bestsellers.svg" alt="Bestsellers" />
                <img />
              </button>
            </li>
            <li class="button-borders">
              <button>
                <img src="assets/icons/hidepanel.svg" alt="Hide panel" />
                <img />
              </button>
            </li>
          </ul>
        </div>

        <section>
          <article class="imagen-principal">
            <img
              src="/assets/images/imagen_principal.webp"
              alt="TYLER PERRY'S MADE A HALLOWEEN"
            />{" "}
            <img />
            <div class="info-imagen-principal">
              <h3>TYLER PERRY'S MADE A HALLOWEEN</h3>
              <p>
                Halloween y Tyler Perry es una comedia de terror que ofrece una
                mezcla de risas y sustos. El personaje de Madea es un clásico de
                la comedia estadounidense, y Tyler Perry lo interpreta con su
                habitual carisma. La película también cuenta con un reparto
                sólido, que incluye a Bella Thorne, Cassi Davis y Patrice
                Lovely.
              </p>
              <a href="#">Read more</a>
              <div class="flecha-roja">
                <img src="assets/icons/red_arrow.svg" alt="Read More" />
                <img />
              </div>
            </div>
          </article>

          <aside class="news">
            <h2>Recent News</h2>
            <span class="linea-roja">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-separator"
                width="100"
                height="100"
                viewBox="0 0 30 10"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="3" y1="12" x2="3" y2="12.01" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="21" y1="12" x2="21" y2="12.01" />
              </svg>
            </span>
            <article>
              <img
                src="/assets/images/news_image_1.webp"
                alt="Attending 'Star Wars' Screening in 'Star Trek' Costume"
              />
              <img />
              <div>
                <h3>Attending 'Star Wars' Screening in 'Star Trek' Costume</h3>
                <time>ON DEC 15, 2017</time>
              </div>
            </article>

            <article>
              <img
                src="/assets/images/news_image_2.webp"
                alt="Reuniting at the 2018 Coschell: Music Festival"
              />
              <img />
              <div>
                <h3>Reuniting at the 2018 Coschell: Music Festival</h3>
                <time>ON DEC 15, 2017</time>
              </div>
            </article>

            <article>
              <img src="/assets/images/news_image_1.webp" alt="'Titanic'" />{" "}
              <img />
              <div>
                <h3>'Titanic', Goonies" Named National Film Treasures</h3>
                <time>ON DEC 15, 2017</time>
              </div>
            </article>
          </aside>
        </section>

        <section class="slider-container">
          <nav class="slider-controls">
            <button class="slider-control-button">Recent Trailers</button>
            <span class="slider-controls-divider">
              <img src="assets/icons/red_separator.svg" alt="" />
              <img />
            </span>
            <button class="slider-control-button">Most Popular</button>
            <span class="slider-controls-divider">
              <img src="assets/icons/red_separator.svg" alt="" />
              <img />
            </span>
            <button class="slider-control-button">Best</button>
          </nav>

          <article class="slides-container">
            <article class="slide">
              <button class="play-button">
                <img src="assets/icons/slider_play.svg" alt="Play" />
                <img />
              </button>
              <img
                class="poster"
                src="/assets/images/poster_warbrothers.webp"
                alt="Poster War Brothers"
              />
              <img />
              <h1 class="film-title">War brothers</h1>
              <div class="slides-links">
                <a href="#">Comedy</a>
                <a href="#">Drama</a>
                <a href="#">Action</a>
              </div>
            </article>
            <article class="slide">
              <button class="play-button">
                <img src="assets/icons/slider_play.svg" alt="Play" />
                <img />
              </button>
              <img
                class="poster"
                src="/assets/images/poster_theinjustice.webp"
                alt="Poster The Injustice"
              />
              <img />
              <h1 class="film-title">The Injustice</h1>
              <div class="slides-links">
                <a href="#">Comedy</a>
                <a href="#">Drama</a>
                <a href="#">Action</a>
              </div>
            </article>
            <article class="slide">
              <button class="play-button">
                <img src="assets/icons/slider_play.svg" alt="Play" />
                <img />
              </button>
              <img
                class="poster"
                src="/assets/images/poster_superman.webp"
                alt="Poster Superman"
              />
              <img />
              <h1 class="film-title">Superman</h1>
              <div class="slides-links">
                <a href="#">Comedy</a>
                <a href="#">Drama</a>
                <a href="#">Action</a>
              </div>
            </article>
            <article class="slide">
              <button class="play-button">
                <img src="assets/icons/slider_play.svg" alt="Play" />
              </button>
              <img
                class="poster"
                src="/assets/images/poster_gladiator.webp"
                alt=""
              />
              <h1 class="film-title">Gladiator</h1>
              <div class="slides-links">
                <a href="#">Comedy</a>
                <a href="#">Drama</a>
                <a href="#">Action</a>
              </div>
            </article>
            <article class="slide">
              <button class="play-button">
                <img src="assets/icons/slider_play.svg" alt="Play" />
              </button>
              <img
                class="poster"
                src="/assets/images/poster_titanic.webp"
                alt=""
              />
              <h1 class="film-title">Titanic</h1>
              <div class="slides-links">
                <a href="#">Comedy</a>
                <a href="#">Drama</a>
                <a href="#">Action</a>
              </div>
            </article>
          </article>

          {/* <article class="slides-container">            Segundo slide 
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-16.png" alt="">
                    <h3>Titanic</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article>
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-14.png" alt="">
                    <h3>Superman</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article>
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-15.png" alt="">
                    <h3>Gladiator</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article>
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-13.png" alt="">
                    <h3>The Injustice</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article>
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-12.png" alt="">
                    <h3>War brothers</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article>
            </article>
            <article class="slides-container">           Tercer slide 
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-13.png" alt="">
                    <h3>The Injustice</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article>
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-12.png" alt="">
                    <h3>War brothers</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article>
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-16.png" alt="">
                    <h3>Titanic</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article>
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-14.png" alt="">
                    <h3>Superman</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article>
                <article class="slide">
                    <img src="images/MicrosoftTeams-image-15.png" alt="">
                    <h3>Gladiator</h3>
                    <div class="slides-links">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                        <a href="#">Action</a>
                    </div>
                </article> 
            </article>*/}
        </section>

        <section class="banner-samurai">
          <img src="/assets/images/samurai_image.webp" alt="The Last Samurai" />
          <div>
            <h2 class="new-releases">NEW RELEASES</h2>
            <h3>THE LAST SAMURAI</h3>
            <h2 class="hbo-series">HBO SERIES</h2>
            <h2 class="season">2 SEASON</h2>
            <p>
              The Last Samurai is a 2003 American epic period drama war film
              directed and co-produced by Edward Zwick, who also co-wrote the
              screenplay with John Logan and Marshall Herskovitz. The film stars
              Tom Cruise, who also co-produced.
            </p>
            <span class="more-information-icon">
              <img
                src="assets/icons/more_information_icon.svg"
                alt="More information"
              />
            </span>
            <span class="watch-trailer-icon">
              <img
                src="assets/icons/watch_trailer_icon.svg"
                alt="Watch trailer"
              />
            </span>
            <a href="#" class="view-more-information">
              VIEW MORE INFORMATION
            </a>
            <a href="#" class="watch-trailer">
              WATCH TRAILER
            </a>
          </div>
        </section>

        <section class="poster-container">
          <article class="poster">
            <div>
              <a class="poster-film-title" href="#">
                <h3>INFERNO</h3>
              </a>
              <h2>Adventure</h2>
              <button>WATCH TRAILER</button>
              <a class="more-information-link" href="">
                MORE INFORMATION
              </a>
            </div>
          </article>

          <article class="poster">
            <div>
              <a class="poster-film-title" href="#">
                <h3>BAND OF BROTHERS</h3>
              </a>
              <h2>Adventure</h2>
              <button>WATCH TRAILER</button>
              <a class="more-information-link" href="">
                MORE INFORMATION
              </a>
            </div>
          </article>

          <article class="poster">
            <div>
              <a class="poster-film-title" href="#">
                <h3>GLADIATOR</h3>
              </a>
              <h2>Action / Adventure</h2>
              <button>WATCH TRAILER</button>
              <a class="more-information-link" href="">
                MORE INFORMATION
              </a>
            </div>
          </article>

          <article class="poster">
            <div>
              <a class="poster-film-title" href="#">
                <h3>SPIDER-MAN</h3>
              </a>
              <h2>Action / Adventure</h2>
              <button>WATCH TRAILER</button>
              <a class="more-information-link" href="">
                MORE INFORMATION
              </a>
            </div>
          </article>
        </section>

        <section class="comments-container">
          <article class="comment">
            <img
              class="comment-img"
              src="/assets/images/comment_image_1.webp"
              alt="Comments"
            />
            <span>
              <img src="assets/icons/comillas.svg" alt="Comment" />
            </span>
            <h2>"It was so much fun for all of my friends and family."</h2>
            <div>
              <h1>LISA MORRISON</h1>
              <h3>Film Expert</h3>
            </div>
          </article>

          <article class="comment">
            <img
              class="comment-img"
              src="/assets/images/comment_image_2.webp"
              alt="Comments"
            />
            <span>
              <img src="assets/icons/comillas.svg" alt="Comment" />
            </span>
            <h2>"I appreciate the high quality of your products."</h2>
            <div>
              <h1>MIKE STEVENS</h1>
              <h3>Film Expert</h3>
            </div>
          </article>

          <article class="comment">
            <img
              class="comment-img"
              src="/assets/images/comment_image_3.webp"
              alt="Comments"
            />
            <span>
              <img src="assets/icons/comillas.svg" alt="Comment" />
            </span>
            <h2>"Everything is great about this website, we like it."</h2>
            <div>
              <h1>MARTIN MOORE</h1>
              <h3>Film Expert</h3>
            </div>
          </article>

          <article class="comment">
            <img
              class="comment-img"
              src="/assets/images/comment_image_4.webp"
              alt="Comments"
            />
            <span>
              <img src="assets/icons/comillas.svg" alt="Comment" />
            </span>
            <h2>
              "The website's is fantastic! It's so much easier to navigate"
            </h2>
            <div>
              <h1>BRYAN SMITH</h1>
              <h3>Film Expert</h3>
            </div>
          </article>
        </section>

        <section class="latest-news-container">
          <div class="title">
            <h1>LATEST NEWS</h1>
            <h3>
              Stay tuned for all the latest entertainment news and TV premiers.
            </h3>
          </div>

          <div class="news-container">
            <article class="new">
              <h3>HOME, GRID, NEWS & UPDATES</h3>
              <h2>9 FILMS ARE VYING FOR FOREIGN OSCAR NOMINATION</h2>
              <time>ON DEC 15, 2017</time>
            </article>

            <article class="new">
              <h3>HOME, GRID, NEWS & UPDATES</h3>
              <h2>'TITANIC', 'GOONIES' NAMED NATIONAL FILM TREASURES</h2>
              <time>ON DEC 15, 2017</time>
            </article>

            <article class="new">
              <h3>HOME, GRID, NEWS & UPDATES</h3>
              <h2>REUNITING AT THE 2018 COACHELLA MUSIC FESTIVAL</h2>
              <time>ON DEC 15, 2017</time>
            </article>

            <article class="new">
              <h3>HOME, GRID, NEWS & UPDATES</h3>
              <h2>ATTENDING 'STAR WARS' SCREENING IN 'STAR TREK' COSTUME</h2>
              <time>ON DEC 15, 2017</time>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <section class="footer">
          <div class="logo-info">
            <img src="/assets/images/logo.webp" alt="Logo" />
            <a href="">ThemeRex © 2023. All rights reserved.</a>
          </div>

          <nav class="footer-additional-links">
            <ul>
              <li>MOVIES</li>
              <li>
                <a href="">Film News</a>
              </li>
              <li>
                <a href="">Action</a>
              </li>
              <li>
                <a href="">Coming Soon</a>
              </li>
              <li>
                <a href="">Most Popular</a>
              </li>
              <li>
                <a href="">Top Trailers</a>
              </li>
            </ul>

            <ul>
              <li>ADITIONAL LINKS</li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Service Plus</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </nav>

          <div class="newsletter">
            <h2>NEWSLETTER</h2>

            <div class="newsletter-input">
              <input
                id="email"
                type="email"
                placeholder="Subscribe now!"
                required
                class="input-field"
              />

              <svg
                class="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M3 7a2 2 0 0 1 2 -2h14a2
                            2 0 0 1 2 2v10a2 2 0 0 1
                            -2 2h-14a2 2 0 0 1 -2
                            -2v-10z"
                ></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </div>

            <p>
              ¿Amas el cine? Únete a nuestra newsletter para mantenerte
              actualizado sobre las últimas películas, estrenos y ofertas
              exclusivas. Suscríbete ahora y no te pierdas ningún detalle del
              mundo del cine.
            </p>
          </div>

          <nav class="socialnetworks-buttons">
            <ul>
              <li>
                <button class="twitter-button">
                  <span>Twitter</span>
                  <img
                    class="twitter-icon"
                    src="assets/icons/twitter.svg"
                    alt="Twitter"
                  />
                </button>
              </li>

              <li>
                <button class="facebook-button">
                  <span>Facebook</span>
                  <img
                    class="facebook-icon"
                    src="assets/icons/facebook.svg"
                    alt="Facebook"
                  />
                </button>
              </li>

              <li>
                <button class="instagram-button">
                  <span>Instagram</span>
                  <img
                    class="instagram-icon"
                    src="assets/icons/instagram.svg"
                    alt="Instagram"
                  />
                </button>
              </li>

              <li>
                <button class="youtube-button">
                  <span>YouTube</span>
                  <img
                    class="youtube-icon"
                    src="assets/icons/youtube.svg"
                    alt="YouTube"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </footer>
    </>
  );
}
