let rating 

function selected(button) {
    rating = button.dataset.value

    let allButtons = document.querySelectorAll('.rating-btn')

    for (let btn of allButtons) {
        btn.classList.remove('active')  
    }
    
    button.classList.add('active')
}



function sendRating() {
    alert(rating)
}