import './style.css'
import { initGallery } from './js/gallery.js'
import { initHomeMap, initContactMap } from './js/map.js'
import { initForm } from './js/form.js'

document.addEventListener('DOMContentLoaded', function() {
  // Elk onderdeel start alleen als het element op de pagina bestaat
  if (document.getElementById('slider')) initGallery()
  if (document.getElementById('home-map')) initHomeMap()
  if (document.getElementById('contact-map')) initContactMap()
  if (document.getElementById('contact-form')) initForm()

  // Mobiele hamburger navigatie
  var navToggle = document.getElementById('nav-toggle')
  var navMobile = document.getElementById('nav-mobile')

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMobile.classList.toggle('is-open')
    })
  }
})
