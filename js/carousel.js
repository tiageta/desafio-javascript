//carousel

//Array storage class
let carouselArr = [];

/****************** ADDED CODE 1 ******************/
/* DOM related variables */
let main, carousel, carouselTitle;

const img = document.createElement("img");
const textNode = document.createTextNode("");
const linkAnchor = document.createElement("a");

//class Carousel
class Carousel {
  /* Initializes static properties */
  static _sequence = 0;
  static _size = 0;
  static _interval = 0;
  /*************** END OF ADDED CODE 1 ***************/

  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }

  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        /****************** ADDED CODE 2 ******************/
        /* Gets neccessary DOM Elements*/
        main = document.getElementsByTagName("main")[0];
        carousel = document.getElementById("carousel");
        carouselTitle = document.getElementById("carousel-title");

        /* Adds an anchor element that will hold both img and title forwarding url */
        main
          .insertBefore(linkAnchor, main.firstChild)
          .append(carousel, carouselTitle);

        /* Appends empty elements to existing divs */
        carousel.appendChild(img);
        carouselTitle.appendChild(textNode);

        /* Adds img alt */
        img.alt = "carousel cards";

        /* Adds responsive img sizing */
        img.setAttribute(
          "style",
          "height:100% ; max-width:90%; object-fit:contain"
        );

        /* Centers img in containing div */
        carousel.style.textAlign = "center";

        /*************** END OF ADDED CODE 2 ***************/

        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next(); //start
        Carousel._interval = setInterval(function () {
          Carousel.Next();
          /***************** ALTERED CODE 1 *****************/
        }, 2000); // Time interval changed from 5000 to 2000
        /*************** END OF ALTERED CODE 1 **************/
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    /****************** ADDED CODE 3 ******************/
    /* Updates Carousel image */
    img.src = "img/" + carouselArr[Carousel._sequence].image;
    /* Updates anchor url */
    linkAnchor.href = carouselArr[Carousel._sequence].url;
    /* Updates Carousel title */
    textNode.textContent = carouselArr[Carousel._sequence].title;
    /* Controls current Carousel sequence */
    if (++Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }
    /*************** END OF ADDED CODE 3 ***************/
  }
}
