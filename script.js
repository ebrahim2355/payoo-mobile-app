document.getElementById("login-btn").addEventListener("click", function(e){
    e.preventDefault();
    
    const mobileNumber = 17123456789;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value; //got a string
    const mobileNumberValueConverted = parseInt(mobileNumberValue); //converted to number

    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="home.html";
    }
    else{
        alert("Invalid Credential");
    }
})