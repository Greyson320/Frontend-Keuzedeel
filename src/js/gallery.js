export function initGallery() {
  var slides = document.querySelectorAll('.slide')
  var dots = document.querySelectorAll('.dot')
  var huidigSlide = 0

  // eerste slide tonen bij het laden
  slides[0].classList.add('is-active')
  dots[0].classList.add('is-active')

  function toonSlide(nummer) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('is-active')
      dots[i].classList.remove('is-active')
    }
    slides[nummer].classList.add('is-active')
    dots[nummer].classList.add('is-active')
    huidigSlide = nummer
  }

  // volgende slide
  document.getElementById('slide-next').addEventListener('click', function() {
    var volgend = huidigSlide + 1
    if (volgend >= slides.length) {
      volgend = 0
    }
    toonSlide(volgend)
  })

  // vorige slide
  document.getElementById('slide-prev').addEventListener('click', function() {
    var vorige = huidigSlide - 1
    if (vorige < 0) {
      vorige = slides.length - 1
    }
    toonSlide(vorige)
  })

  // dot knoppen
  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() {
      toonSlide(i)
    })
  })

  // automatisch wisselen elke 5 seconden
  setInterval(function() {
    var volgend = huidigSlide + 1
    if (volgend >= slides.length) {
      volgend = 0
    }
    toonSlide(volgend)
  }, 5000)
}
