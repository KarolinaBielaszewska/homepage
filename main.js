//console.log('Hejo')
const name = 'Karolina'
const age = 26
const unlimitedAmo = true
//console.log(`Jestem ${name} i mam ${age} lat.`)


document.querySelector('h1').innerHTML = document.querySelector('h1').innerHTML +
` <br> Jestem ${name} i mam ${age} lat.`

const quickNavSwitcher = document.querySelector('.quickNav__switcher--js');
const quickNavList = document.querySelector('.quickNav__list--js');
quickNavSwitcher.addEventListener('click', (e) => {
quickNavList.classList.toggle('quickNav__list--visible');
})

const button = document.querySelector('.click__button--js');
const header = document.querySelector('.click__header--js');

button.addEventListener('click', (e) => {
    header.innerHTML = 'Tak wyglądam po kliknięciu';
    header.classList.add('click__header--red');
})