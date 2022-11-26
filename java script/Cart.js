// window.addEventListener('DOMContentLoaded', (event) => {

// name validation    


function validateName() {
    const name = document.getElementById('first-name');

    const nameError = document.getElementById('name-error');
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');

    if (nameRegex.test(name.value))
        nameError.textContent = "";
    else nameError.textContent = "Enter your full name";
}

// phone number validation

function validatePhone() {
    const phone = document.getElementById('phone-number');
    const phnError = document.getElementById('phone-error');
    let pwdRegex = RegExp('^([([0-9]{9,10})$');
    if (pwdRegex.test(phone.value))
        phnError.textContent = "";
    else phnError.textContent = "Enter your phone number";
}


// address validation    

function validateAddress() {
    const address = document.getElementById('address');
    const addressError = document.getElementById('address-error');

    if (address.value == "") addressError.textContent = "Enter your address";
}

// city/town validation    

function validateTown() {
    const town = document.getElementById('state');
    const townError = document.getElementById('state-error');
    let townRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
    if (townRegex.test(town.value))
        townError.textContent = "";
    else townError.textContent = "Enter your city or town";
}

// state validation    

function validateState() {
    const landmark = document.getElementById('state');
    const landmarkError = document.getElementById('landmark-error');
    let landmarkRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');

    if (landmarkRegex.test(landmark.value))

        landmarkError.textContent = "";
    else landmarkError.textContent = "Enter your state";
}


function addCustomerDetails() {
    validateName();
    validatePhone();
    validateAddress();
    validateTown();
    validateState();
    console.log('show data')
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    var token = localStorage.getItem('token');
    let data = {
        "address_type": "Home",
        "address": address.value,
        "city": city.value,
        "state": state.value,
        "pincode": "523241",
        "landmark": "church"
    };
    $.ajax({
        url: "http://127.0.0.1:8000/api/addAddress",
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


function placeorder() {
    document.getElementById('placeorderbutton').style.display = 'none';
    if (document.getElementById('place-order-page')) {

        if (document.getElementById('cart_page-section2').style.display == 'none') {
            document.getElementById('cart_page-section2').style.display = 'block';
            document.getElementById('customer-details-page').style.display = 'none';
        }
        else {
            document.getElementById('cart_page-section2').style.display = 'none';
            document.getElementById('customer-details-page').style.display = 'block';
        }
    }
}

// });