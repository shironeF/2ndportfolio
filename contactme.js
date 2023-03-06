  const scriptURL = 'https://script.google.com/macros/s/AKfycbwmWd3OAttXudsyWQ7yx1SaVwoM1LeizeHfhNBr9KV0bKHt_uSYiyP-bEu7LscsYgX8fQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully, Thank You!"
        setTimeout(function(){
            msg.innerHTML = ""
        },8000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })