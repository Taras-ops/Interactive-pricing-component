const priceText = document.querySelectorAll('#priceText')
const pageviews = document.getElementById('pageviews')
const priceInput = document.getElementById('priceInput')
const checkbox= document.getElementById('checkbox')

const data = [
    {
        pageviews: '10K',
        price: '8'
    },
    {
        pageviews: '50K',
        price: '12'
    },
    {
        pageviews: '100K',
        price: '16'
    },
    {
        pageviews: '500K',
        price: '24'
    },
    {
        pageviews: '1M',
        price: '36'
    },
]

checkbox.checked = false

const i = parseInt(priceInput.value) - 1

pageviews.innerText = data[i].pageviews
priceText[0].innerText = data[i].price
priceText[1].innerText = data[i].price

priceInput.style.backgroundSize = (parseInt(priceInput.value) - parseInt(priceInput.min)) * 100 / (parseInt(priceInput.max) - parseInt(priceInput.min)) + '% 100%'

priceInput.addEventListener('input', (e) => {
    checkbox.checked = false
    index = parseInt(e.target.value) - 1
    pageviews.innerText = data[index].pageviews
    priceText[0].innerText = data[index].price
    priceText[1].innerText = data[index].price

    min = e.target.min
    max = e.target.max
    value = e.target.value
    e.target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'
})

let previousPrice = 0

checkbox.addEventListener('input', (e) => {
    checked = e.target.checked
    if(checked) {
        previousPrice = priceText[0].innerHTML
        priceText[0].innerText = priceText.innerText * 0.75
        priceText[1].innerText = priceText.innerText * 0.75
    }
    else{
        priceText[0].innerHTML = previousPrice
        priceText[1].innerHTML = previousPrice
    }
})