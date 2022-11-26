window.addEventListener('DOMContentLoaded', function() {

    const user = document.querySelector('.user')
    const cart = document.querySelector('.cart')
    const userOptions = document.querySelector('.userOptions')




    user.addEventListener('click', function() {
        console.log("user")
        userOptions.style.display = "flex";

    })

    cart.addEventListener('click', function() {
        window.location = "http://localhost:5500/html/Cart.html"
    })

    
})