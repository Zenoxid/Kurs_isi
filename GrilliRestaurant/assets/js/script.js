'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});
document.getElementById('createPageButton').addEventListener('click', function() {
  // Create a new div element to act as the new page
  const newPage = document.createElement('div');
  newPage.style.border = "1px solid black";
  newPage.style.margin = "20px";
  newPage.style.padding = "20px";

  // Add some content to the new page
  const newPageContent = `
  
  <section class="section menu" aria-label="menu-label" id="menu">
  <div class="container">
  <h2 class="headline-1 section-title text-center">Delicious Menu</h2>
    <ul class="grid-list">
 
  <li>
  <div class="menu-card hover:card">
  
    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Seher Yemekleri/Seher yemeyi (1 neferlik).png" width="100" height="100" loading="lazy" alt="Greek Salad"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Səhər yeməyi(1 nəfərlik)</a>
        </h3>

        <span class="span title-2">₼17.50</span>
      </div>

    </div>

  </div>
</li>

<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Seher Yemekleri/Seher yemeyi (2 neferlik).png" width="100" height="100" loading="lazy" alt="Lasagne"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Səhər yeməyi(2 nəfərlik)</a>
        </h3>

        <span class="span title-2">₼30.00</span>
      </div>

    </div>

  </div>
</li>

<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Seher Yemekleri/Pomidor-yumurta.png" width="100" height="100" loading="lazy" alt="Butternut Pumpkin"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Pomidor-yumurta</a>
        </h3>

        <span class="span title-2">₼5.00</span>
      </div>

    </div>

  </div>
</li>

<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Seher Yemekleri/Kolbasali Omlet.png" width="100" height="100" loading="lazy" alt="Tokusen Wagyu"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Kolbasalı Omlet</a>
        </h3>

        <span class="span title-2">₼5.00</span>
      </div>

    </div>

  </div>
</li>

<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Seher Yemekleri/Bal.png" width="100" height="100" loading="lazy" alt="Olivas Rellenas"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Bal</a>
        </h3>

        <span class="span title-2">₼2.00</span>
      </div>

    </div>

  </div>
</li>

<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Seher Yemekleri/Qaymaq.png" width="100" height="100" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Qaymaq</a>
        </h3>

        <span class="span title-2">₼3.50</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Soyuq Qelyanaltilar/Ag Pendir.png"  width="100" height="100" loading="lazy" alt="Opu Fish "
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Ağ Pendir</a>
        </h3>

        <span class="span title-2">₼5.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Soyuq Qelyanaltilar/Tursu cesidleri.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Turşu Çeşidləri</a>
        </h3>

        <span class="span title-2">₼5.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Soyuq Qelyanaltilar/Suzme.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Süzmə</a>
        </h3>

        <span class="span title-2">₼4.50</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Soyuq Qelyanaltilar/Acika.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Acika</a>
        </h3>

        <span class="span title-2">₼3.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Sorbalar/Merci sorbasi.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Mərci şorbası</a>
        </h3>

        <span class="span title-2">₼4.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Sorbalar/Gobelek sorbasi.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Göbələk şorbası</a>
        </h3>

        <span class="span title-2">₼6.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Salatlar/Isti Terevez Salati.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">İsti tərəvəz salatı</a>
        </h3>

        <span class="span title-2">₼8.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Salatlar/Coban Salati.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Çoban salatı</a>
        </h3>

        <span class="span title-2">₼6.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Salatlar/Thai Salati.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Thai salatı</a>
        </h3>

        <span class="span title-2">₼12.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Salatlar/Sezar Salati Toyuq ile.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Sezar salatı toyuq ilə</a>
        </h3>

        <span class="span title-2">₼12.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Kabablar/Toyuq Kababi.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Toyuq kababı</a>
        </h3>

        <span class="span title-2">₼8.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Kabablar/Quzu Antrikot Kababi.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Quzu Antrikot kababı</a>
        </h3>

        <span class="span title-2">₼12.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Kabablar/Qarisiq Kabab seti.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Qarışıq kabab seti</a>
        </h3>

        <span class="span title-2">₼30.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Kabablar/Dana Basdirma.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Dana Basdırma</a>
        </h3>

        <span class="span title-2">₼15.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Esas Yemekler/Medalyon Steyk.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Medalyon Steyk</a>
        </h3>

        <span class="span title-2">₼29.00</span>
      </div>
    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Esas Yemekler/Gurze.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Gürzə</a>
        </h3>

        <span class="span title-2">₼7.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Desertler/Cizkeyk Nyu-York.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Çizkeyk Nyu-York</a>
        </h3>

        <span class="span title-2">₼8.50</span>
      </div>

    </div>

  </div>
</li>

<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Desertler/Balli Tort.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Ballı Tort</a>
        </h3>

        <span class="span title-2">₼8.50</span>
      </div>
    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Desertler/Dondurma.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Dondurma</a>
        </h3>

        <span class="span title-2">₼5.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Desertler/Tiramisu.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Tiramisu</a>
        </h3>

        <span class="span title-2">₼8.50</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Desertler/Kunefe.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Künəfə</a>
        </h3>

        <span class="span title-2">₼8.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Alkoqolsuz/Cola330.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Cola / Fanta / Sprite / Ice Tea(330ml)</a>
        </h3>

        <span class="span title-2">₼4.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Alkoqolsuz/Latte.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Latte</a>
        </h3>

        <span class="span title-2">₼8.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Alkoqolsuz/Mojito.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Mojito</a>
        </h3>

        <span class="span title-2">₼10.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Alkoqolsuz/TRkofe.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Türk qəhvəsi</a>
        </h3>

        <span class="span title-2">₼5.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Alkoqollu/Xirdalan500.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Xırdalan 500ml</a>
        </h3>

        <span class="span title-2">₼6.00</span>
      </div>

    </div>

  </div>
</li>
<li>
  <div class="menu-card hover:card">

    <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
      <img class="imgs" src="./assets/images/Alkoqollu/Edraft.png" width="50" height="50" loading="lazy" alt="Opu Fish"
        class="img-cover">
    </figure>

    <div>

      <div class="title-wrapper">
        <h3 class="title-3">
          <a href="#" class="card-title">Efes Draft 500ml</a>
        </h3>

        <span class="span title-2">₼9.00</span>
      </div>

    </div>

  </div>
</li>
</ul>
</section>

  `;
  newPage.innerHTML = newPageContent;

  // Append the new page to the content div
  document.getElementById('content').appendChild(newPage);
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});