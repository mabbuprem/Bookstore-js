window.addEventListener('DOMContentLoaded', function () {
let token = localStorage.getItem('token');
let bookIcon = document.querySelector('.bookIcon')


getallbooks();

bookIcon.addEventListener('click', function () {
    window.location="../html/DisplayBook.html"
   })

   $(document).on('click', '.main-container', function (event) {
    console.log(event.target.id)
    let idValue = event.currentTarget.id
    console.log(idValue)



})


//get all books
function getallbooks() {
    console.log("Display All Books")

    $.ajax({
        url: "http://127.0.0.1:8000/api/displayAllBooks",
        type: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },

        success: function (result) {
            console.log(result);
            let bookarray = result.books
            document.getElementById('bookdiv').innerHTML = bookarray.map((book) => `
                
            <div class="bookContainer"> 
            <div class="imgContainer" >
            <div class="book"id=${book._id}><img src="../asserts/bookListing.png" class ="img"> </div>
            </div> 
            <div class="bookName"id=${book._id}>${book.description}</div>
            <div class="author"id=${book._id}>${book.author}</div>
            <div class="rating">
            <div class="star" id=${book._id}>4.5 &#9734;</div>
            <div class="starRating" id=${book._id}>(5)</div>
            </div>
            <div class="price">
            <div class="price1"id=${book._id}>Rs. ${book.Price}</div>
            <div class="originalPrice"id=${book.Price}> ${book.price}</div>
            </div>
            </div>

        


                
     `)
        },


    })


}
})