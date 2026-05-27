export function initForm() {
  var form = document.getElementById('contact-form')
  if (!form) return

  form.addEventListener('submit', function(e) {
    e.preventDefault()

    // foutmeldingen leegmaken
    var velden = document.querySelectorAll('.form-input')
    for (var i = 0; i < velden.length; i++) {
      velden[i].classList.remove('has-error')
    }

    var fouten = document.querySelectorAll('.form-error')
    for (var i = 0; i < fouten.length; i++) {
      fouten[i].textContent = ''
    }

    var naam = document.getElementById('naam')
    var email = document.getElementById('email')
    var onderwerp = document.getElementById('onderwerp')
    var bericht = document.getElementById('bericht')

    var isGeldig = true

    if (naam.value.trim() === '') {
      document.getElementById('naam-fout').textContent = 'Vul je naam in.'
      naam.classList.add('has-error')
      isGeldig = false
    }

    if (email.value.trim() === '' || !email.value.includes('@') || !email.value.includes('.')) {
      document.getElementById('email-fout').textContent = 'Vul een geldig e-mailadres in.'
      email.classList.add('has-error')
      isGeldig = false
    }

    if (onderwerp.value.trim() === '') {
      document.getElementById('onderwerp-fout').textContent = 'Vul een onderwerp in.'
      onderwerp.classList.add('has-error')
      isGeldig = false
    }

    if (bericht.value.trim().length < 10) {
      document.getElementById('bericht-fout').textContent = 'Je bericht moet minimaal 10 tekens bevatten.'
      bericht.classList.add('has-error')
      isGeldig = false
    }

    if (isGeldig) {
      form.classList.add('hidden')
      document.getElementById('form-succes').classList.remove('hidden')
    }
  })
}
