const button = document.getElementById('enter');
button.addEventListener('click',function(){
    const formBackground = document.getElementById('login-area');
    formBackground.style.display = "none"; 
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click',function(){
    const depositValue = document.getElementById('deposit-value-add').value;
    updateAmount('deposit-value',depositValue);
    updateAmount('balance-value',depositValue);
    document.getElementById('deposit-value-add').value = "";
})

const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click',function(){
    const withdrawValue = document.getElementById('withdraw-value-add').value;
    updateAmount('withdraw-value',withdrawValue);
    subtractBalance('balance-value',withdrawValue);
    document.getElementById('withdraw-value-add').value = "";
})

function updateAmount(id,textFieldValue){
    const values = document.getElementById(id).innerText;
    const amount = parseFloat(values);   
    const totalAmount = amount + parseFloat(textFieldValue);
    document.getElementById(id).innerText = totalAmount;
}

function subtractBalance(id,textFieldValue){
    const values = document.getElementById(id).innerText;
    const amount = parseFloat(values);
    const totalAmount = amount-textFieldValue;
    document.getElementById(id).innerText = totalAmount;
}
