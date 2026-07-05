let _home = document.getElementById('Home')
let _about = document.getElementById('About')
let _contact = document.getElementById('Contact')
let _blog = document.getElementById('Blog')
let _works = document.getElementById('Works')

function gotoHome() {
  _home.style.fontSize = '100%'
  _about.style.fontSize = '0%'
  _contact.style.fontSize = '0%'
  _blog.style.fontSize = '0%'
  _works.style.fontSize = '0%'
}

function gotoAbout() {
  _home.style.fontSize = '0%'
  _about.style.fontSize = '100%'
  _contact.style.fontSize = '0%'
  _blog.style.fontSize = '0%'
  _works.style.fontSize = '0%'
}

function gotoContact() {
  _home.style.fontSize = '0%'
  _about.style.fontSize = '0%'
  _contact.style.fontSize = '100%'
  _blog.style.fontSize = '0%'
  _works.style.fontSize = '0%'
}

function gotoBlog() {
  _home.style.fontSize = '0%'
  _about.style.fontSize = '0%'
  _contact.style.fontSize = '0%'
  _blog.style.fontSize = '100%'
  _works.style.fontSize = '0%'
}

function gotoWorks() {
  _home.style.fontSize = '0%'
  _about.style.fontSize = '0%'
  _contact.style.fontSize = '0%'
  _blog.style.fontSize = '0%'
  _works.style.fontSize = '100%'
}
