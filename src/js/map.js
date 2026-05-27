import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Leaflet icoontjes handmatig instellen
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export function initHomeMap() {
  var kaart = L.map('home-map').setView([52.15, 5.35], 7)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> bijdragers',
    maxZoom: 19,
  }).addTo(kaart)

  // locaties op de kaart zetten
  var locaties = [
    { lat: 52.3676, lng: 4.9041, naam: 'Amsterdam', info: 'Tropische binnentuin in de Jordaan' },
    { lat: 51.9225, lng: 4.4792, naam: 'Rotterdam', info: 'Stadsjungle op het dak van De Rotterdam' },
    { lat: 52.0907, lng: 5.1214, naam: 'Utrecht', info: 'Jungletuin in het Wilhelminapark' },
    { lat: 51.9851, lng: 5.8987, naam: 'Arnhem', info: "Tropische inspiratie bij Burgers' Zoo" },
    { lat: 52.3824, lng: 4.6462, naam: 'Haarlem', info: 'Subtropische achtertuin in de Haarlemmerhout' },
    { lat: 51.5719, lng: 4.7683, naam: 'Breda', info: 'Jungletuin met vijver in Park Valkenberg' },
  ]

  for (var i = 0; i < locaties.length; i++) {
    var loc = locaties[i]
    L.marker([loc.lat, loc.lng])
      .addTo(kaart)
      .bindPopup('<strong>' + loc.naam + '</strong><br>' + loc.info)
  }
}

export function initContactMap() {
  var kaart = L.map('contact-map').setView([52.4968, 6.0889], 15)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> bijdragers',
    maxZoom: 19,
  }).addTo(kaart)

  L.marker([52.4968, 6.0889])
    .addTo(kaart)
    .bindPopup('<strong>Jungletuin</strong><br>Stadionplein 12, Zwolle')
    .openPopup()
}
