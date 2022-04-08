//carousel

//Array storage class
let carouselArr = [];

/****************** ADDED CODE 1 ******************/
/* DOM related variables */
let carouselImg, carouselLink;

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
        /* Creates img element in DOM for Carousel*/
        carouselImg = document.createElement("img");
        carouselImg.alt = "carousel cards";
        /* Adds responsive sizing */
        carouselImg.setAttribute(
          "style",
          "height:100% ; max-width:90%; object-fit:contain"
        );
        document.getElementById("carousel").appendChild(carouselImg);
        /* Centers img in containing div */
        document.getElementById("carousel").style.textAlign = "center";

        /* Creates empty title with anchor in DOM for Carousel */
        carouselLink = document.createElement("a");
        carouselLink.appendChild(document.createTextNode(""));
        document.getElementById("carousel-title").appendChild(carouselLink);
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
    carouselImg.src = "img/" + carouselArr[Carousel._sequence].image;
    /* Updates Carousel title */
    carouselLink.textContent = carouselArr[Carousel._sequence].title;
    carouselLink.href = carouselArr[Carousel._sequence].url;
    /* Controls current Carousel sequence */
    if (++Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }
    /*************** END OF ADDED CODE 3 ***************/
  }
}
