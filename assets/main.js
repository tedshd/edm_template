const eventsBtn = document.querySelectorAll('.btn_events')

for (var i = 0; i < eventsBtn.length; i++) {
  eventsBtn[i].addEventListener('click', function (e) {
    gtag('event', '<name>', {
      'label': this.getAttribute('data-label'),
    })
  })
}