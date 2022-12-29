const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const cel = '°C'

let fahrenheit
let celsius

// T(°F) = T(°C) × 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8

const change = () => {
	if ((one.textContent == '°C')) {
		one.textContent = '°F'
		two.textContent = '°C'
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
	}
}

changeBtn.addEventListener('click', change)
