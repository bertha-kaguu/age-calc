const toggleBtn = document.getElementById("toggleTheme")

toggleBtn.onclick = () => {

document.body.classList.toggle("dark")

toggleBtn.innerText =
document.body.classList.contains("dark")
? "☀️"
: "🌙"

}

/* load saved people */

let people = JSON.parse(localStorage.getItem("people")) || []

displayPeople()

function addPerson(){

const name = document.getElementById("name").value
const birthdate = document.getElementById("birthdate").value

if(!name || !birthdate){

alert("Enter name and birthdate")
return

}

people.push({

name,
birthdate

})

localStorage.setItem("people",JSON.stringify(people))

displayPeople()

}

function displayPeople(){

const container = document.getElementById("peopleList")

container.innerHTML = ""

people.forEach(person => {

const birth = new Date(person.birthdate)
const today = new Date()

let years = today.getFullYear() - birth.getFullYear()
let months = today.getMonth() - birth.getMonth()
let days = today.getDate() - birth.getDate()

if(days < 0){

months--

days += new Date(today.getFullYear(), today.getMonth(), 0).getDate()

}

if(months < 0){

years--

months += 12

}

const nextBirthday =
new Date(today.getFullYear(), birth.getMonth(), birth.getDate())

if(nextBirthday < today){

nextBirthday.setFullYear(today.getFullYear()+1)

}

const daysLeft =
Math.ceil((nextBirthday - today) / (1000*60*60*24))

const card = document.createElement("div")

card.className = "person"

card.innerHTML = `

<h3>${person.name}</h3>

<div class="age-box">

<span>${years}y</span>

<span>${months}m</span>

<span>${days}d</span>

</div>

<p>Next Birthday in ${daysLeft} days 🎉</p>

`

container.appendChild(card)

/* birthday confetti */

if(daysLeft === 0){

confetti()

}

})

}

/* simple confetti */

function confetti(){

for(let i=0;i<100;i++){

const conf = document.createElement("div")

conf.style.position="fixed"

conf.style.width="8px"
conf.style.height="8px"

conf.style.background=
`hsl(${Math.random()*360},100%,50%)`

conf.style.left=
Math.random()*window.innerWidth+"px"

conf.style.top="-10px"

conf.style.opacity=1

conf.style.zIndex=999

document.body.appendChild(conf)

let fall = setInterval(()=>{

conf.style.top =
parseInt(conf.style.top)+5+"px"

if(parseInt(conf.style.top) >
window.innerHeight){

clearInterval(fall)
conf.remove()

}

},20)

}

}