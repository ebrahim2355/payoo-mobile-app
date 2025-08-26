const validPin =1234;
const transactionData = [];


// functions to get input values
function getInputValueNumber (id){
    return parseInt(document.getElementById(id).value);
    
}
function getInputValue(id){
    return document.getElementById(id).value;
}

// function to get innerText
function getInnerTextNumber (id){
    return parseInt(document.getElementById(id).innerText);
}
function setInnerText(value){
    return document.getElementById("available-balance").innerText = value;
}

// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

// function to button style
function handleButtonStyle(id){
    const formBtns = document.getElementsByClassName("form-btn");
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-200");
    }
    document.getElementById(id).classList.remove("border-gray-200");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money feature
document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();
    // const bank = document.getElementById("bank").value;
    const bank = getInputValue("bank");

    // const accountNumber = document.getElementById("account-number").value;
    const accountNumber = getInputValue("account-number");

    // const amount = parseInt(document.getElementById("add-amount").value);
    const amount = getInputValueNumber("add-amount");

    // const pin = parseInt(document.getElementById("add-pin").value);
    const pin = getInputValueNumber("add-pin");

    // const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const availableBalance = getInnerTextNumber("available-balance");

    if(amount <= 0){
        alert("Invalid Amount");
        return;
    }
    if (!bank) {
        alert("Please select a bank.");
        return;
    }
    if(accountNumber.length !== 11){
        alert("Please provide a valid account number.");
        return;
    }
    if(pin !== validPin){
        alert("Please provide a valid pin number.");
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    // document.getElementById("available-balance").innerText = totalNewAvailableBalance;
    setInnerText(totalNewAvailableBalance);


    const data = {
        name : "Add money",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
})


// withdraw money feature
document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault();
    // const amount = parseInt(document.getElementById("withdraw-amount").value);
    const amount = getInputValueNumber("withdraw-amount");

    const pin = getInputValueNumber("withdraw-pin");

    const accountNumber = getInputValue("agent-number");

    const availableBalance = getInnerTextNumber("available-balance");

    if(amount <= 0 || amount > availableBalance){
        alert("Invalid Amount");
        return;
    }
    if(accountNumber.length !== 11){
        alert("Please provide a valid account number.");
        return;
    }
    if(pin !== validPin){
        alert("Please provide a valid pin number.");
        return;
    }

    const totalNewAvailableBalance =  availableBalance - amount;

    // document.getElementById("available-balance").innerText = totalNewAvailableBalance;
    setInnerText(totalNewAvailableBalance);


    const data = {
        name : "Cash Out",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
})

document.getElementById("transactions-button").addEventListener("click", function(){
    const transactionContainer = document.getElementById("transaction-container");
    transactionContainer.innerText = "";

    for(const data of transactionData){
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="bg-white ml-[24px] mr-[24px] rounded-[24px] pt-[14px] pb-[14px] mb-[12px]">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <div class="p-3 bg-[#f4f5f7] rounded-full w-[45px] h-[45px] ml-[16px] mr-[8px]">
                                <img src="assets/wallet1.png" alt="">
                            </div>
                            <div>
                                <h3 class="font-semibold text-[#080808] opacity-[70%]">${data.name}</h3>
                                <p class="text-[12px] opacity-[70%]">${data.date}</p>
                            </div>
                        </div>
                        <div class="pr-[24px]">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
            </div>
        `

        transactionContainer.appendChild(div);
    }
})

// transfer money feature
// document.getElementById("transfer-money-parent").addEventListener("click", function(e){
//     e.preventDefault();

// })


// toggling feature
/*
document.getElementById("add-button").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
    document.getElementById("transfer-money-parent").style.display = "none";
})   */
/** document.getElementById("cash-out-button").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("transfer-money-parent").style.display = "none";
}) */
/** document.getElementById("transfer-button").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "block";

})   */

// better version
document.getElementById("add-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById("add-money-parent").style.display = "block";

    handleButtonStyle("add-button");
})
document.getElementById("cash-out-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById("cash-out-parent").style.display = "block";

    handleButtonStyle("cash-out-button");
})
document.getElementById("transfer-button").addEventListener("click", function(){
    const forms = document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById("transfer-money-parent").style.display = "block";

    handleButtonStyle("transfer-button");
})
document.getElementById("bonus-button").addEventListener("click", function(){
    handleToggle("get-bonus-parent");

    handleButtonStyle("bonus-button");
})
document.getElementById("pay-bill-button").addEventListener("click", function(){{
    handleToggle("pay-bill-parent");

    handleButtonStyle("pay-bill-button");
}})
document.getElementById("transactions-button").addEventListener("click", function(){
    handleToggle("transaction-history-parent");

    handleButtonStyle("transactions-button");
})