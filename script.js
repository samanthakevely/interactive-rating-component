let rating = ''

function selected(button) {
    rating = button.dataset.value

    let allButtons = document.querySelectorAll('.rating-btn')

    for (let btn of allButtons) {
        btn.classList.remove('active')  
    }
    
    button.classList.add('active')
}


function sendRating() {

    if (rating === ''){
        alert("Please, choose an option before submitting!")
    } else {
        let ratingCard = document.getElementById('rating-container')
        ratingCard.hidden = true

        let thanksCard = document.getElementById('thanks-container')
        thanksCard.hidden = false

        let span = document.getElementById('selected-rating')
        span.textContent = rating
    }
}