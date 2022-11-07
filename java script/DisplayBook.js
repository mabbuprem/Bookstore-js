 window.addEventListener('DOMContentLoaded', function () {

    console.log("Hi")
    var token = localStorage.getItem('token');
    console.log(token)
    let bookIcon = document.querySelector('.bookIcon')
    let flexContainer = document.querySelector('.displayMainInnerContainer2')
    getallbooks();
    AddtoBag(bookid);
    Wishlist(bookid);

    bookIcon.addEventListener('click', function () {
        window.location.href = '../html/HomePage.html'
    })

    $(document).on('click', '.displayMainInnerContainer', function (event) {
        console.log(event.target.id)
        let idValue = event.currentTarget.id
        console.log(idValue)



    })

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
                let filterArray = result.books
                let bookid = localStorage.getItem('bookid')
                console.log('showbookid',bookid)
                let fl= filterArray.filter((a)=>{
                    return a.id == bookid


                })
                console.log(fl)
                flexContainer.innerHTML = fl.map((book1) => `

                <div class="bookDesc1">
                <div class="bookName1" id="bookName">${book1.description}</div>
                <div class="author1" id="author">${book1.author}</div>
    
    
                <div class="rating1">
                    <div class="star1" id=${book1._id}>4.5 &#9734;</div>
                    <div class="starRating1" id=${book1._id}>(20)</div>
                </div>
    
                <div class="price1">
                    <div class="price11" id=${book1._id}>Rs. ${book1.Price}</div>
                    <div class="originalPrice1" id=${book1._id}> ${book1.price}</div>
                </div>
                
    
    
            </div>
    
    
            <div class="bookDetails">
                <div class="bk1">⚬ Book Detail</div>
                <div class= "bk2"><p>Since Don’t Make Me Think was first published in 2000, over 400,000 Web designers and developers
                have relied on Steve Krug’s guide to help them understand the principles of intuitive navigation
                and information design.

                In this 3rd edition, Steve returns with fresh perspective to reexamine the principles that made
                Don’t Make Me Think a classic-–with updated examples and a new chapter on mobile usability. And
                it’s still short, profusely illustrated…and best of all–fun to read. </p></div>
            </div>
    
            
    
    
                    
         `)
            },
    
        })
       
    
    }
    
   


})

function AddtoBag(bookid){
    console.log('show data',bookid)
    var token = localStorage.getItem('token');
    let data = {
        book_id: bookid
    }
    // console.log("show data")
    $.ajax({
        url: "http://127.0.0.1:8000/api/addBookToCartByBookId",
        type: "POST",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        success: function (result) {
            console.log(result);


        }

    })
}


function Wishlist(bookid){
    console.log('show data',bookid)
    var token = localStorage.getItem('token');
    let data = {
        book_id: bookid
    }
    // console.log("show data")
    $.ajax({
        url: "http://127.0.0.1:8000/api/addBookToWishlistByBookId",
        type: "POST",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        success: function (result) {
            console.log(result);


        }

    })
}

