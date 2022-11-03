window.addEventListener('DOMContentLoaded', function() {

    const flexContainer1 = document.querySelector('.flex-container1');
    const user = document.querySelector('.user')
    const wishBtn = document.querySelector('.wishBtn')
    const userOptions = document.querySelector('.userOptions')
    const cart = document.querySelector('.cart')
    const searchInput = document.querySelector('.search-input')
    const logout = document.querySelector('.logoutB')

    const cartB = document.querySelector('.crt')
    const listContainer = document.querySelector('#list')

    let logoutToken = ""

    wishBtn.addEventListener('click', function() {
        window.location = "http://localhost:5000/WishList/Wishlist.html";


    })

    cart.addEventListener('click', function() {
        window.location = "http://localhost:5000/Cart/Cart.html"
    })

    cartB.addEventListener('click', function() {
        window.location = "http://localhost:5000/Cart/Cart.html"
    })



    logout.addEventListener('click', function() {
        localStorage.setItem("token", logoutToken)
        window.location = "http://localhost:5000/Login/Login.html"
    })




    requirejs(['../Service/userService.js'], (methods) => {



        requirejs(['../Service/userService.js'], (methods) => {
            methods.ajaxGet("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book").then(function(response) {
                let a = JSON.parse(response)
                let serverResponse = a.result;
                // localStorage.setItem("token", a.result.accessToken)
                console.log(serverResponse)
                const listArray = []

                listArray.push(serverResponse)
                console.log(listArray)


                flexContainer1.innerHTML = serverResponse.map(function(book) {
                    return `<div class="bookContainer" id=${book._id}> 
                <div class="imgContainer" >
                <div class="book"id=${book._id}><img src="/Images/alchemist (1).png" class ="img"> </div>
                </div> 
                <div class="bookName"id=${book._id}>${book.bookName}</div>
                <div class="author"id=${book._id}>${book.author}</div>
                <div class="rating">
                <div class="star" id=${book._id}>4.5 &#9734;</div>
                <div class="starRating" id=${book._id}>(20)</div>
                </div>
                <div class="price">
                <div class="price1"id=${book._id}>Rs. ${book.discountPrice}</div>
                <div class="originalPrice"id=${book.price}> ${book.price}</div>
                </div>
                </div>`;

                }).join('');
            }).catch(function(error) {
                console.log(error)
            })



        })



    })



    $(document).on('click', '.bookContainer', function(event) {
        console.log(event.target.id)
        console.log(event.target.textContent)
        let a = event.target.id
        window.location = `http://localhost:5000/DisplayBooks/DisplayBook?id=${a}`



        

    })


   

    




})


