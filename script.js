const toggleBtn = document.getElementById("toggleTheme")

toggleBtn.onclick = () => {

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){
toggleBtn.innerText="☀️"
}else{
toggleBtn.innerText="🌙"
}

}


function calculateAge(){

const birthdate = document.getElementById("birthdate").value

if(!birthdate){
alert("Please select your birth date")
return
}

const birth = new Date(birthdate)
const today = new Date()

let years = today.getFullYear() - birth.getFullYear()
let months = today.getMonth() - birth.getMonth()
let days = today.getDate() - birth.getDate()

if(days < 0){
months--
const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
days += lastMonth.getDate()
}

if(months < 0){
years--
months += 12
}

document.getElementById("years").innerText = years
document.getElementById("months").innerText = months
document.getElementById("days").innerText = days

/* advanced calculations */

const diff = today - birth

const totalDays = Math.floor(diff / (1000*60*60*24))
const weeks = Math.floor(totalDays / 7)
const hours = Math.floor(diff / (1000*60*60))
const minutes = Math.floor(diff / (1000*60))

document.getElementById("weeks").innerText = weeks
document.getElementById("totalDays").innerText = totalDays
document.getElementById("hours").innerText = hours
document.getElementById("minutes").innerText = minutes


/* next birthday */

let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())

if(nextBirthday < today){
nextBirthday.setFullYear(today.getFullYear()+1)
}

const diffBirthday = nextBirthday - today

const daysLeft = Math.ceil(diffBirthday / (1000*60*60*24))

document.getElementById("nextBirthday").innerText = nextBirthday.toDateString()
document.getElementById("countdown").innerText = daysLeft + " days remaining 🎉"

}