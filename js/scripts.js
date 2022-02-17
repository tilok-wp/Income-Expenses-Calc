// Massage error element 
let savingError = document.getElementById('saving-error-massage')
let balanceError = document.getElementById('blance-error-massage')
// Input value collect
function getInputValue(idName){
    const inputField = document.getElementById(idName)
    const inputValue = parseFloat(inputField.value)

    if(typeof(inputValue) == 'number' && inputValue >= 0){
        const errorContents = document.querySelectorAll('.input-error')
        for(error of errorContents){
            error.remove();
        }
        return inputValue
    }else if(inputValue < 0){
        inputField.insertAdjacentHTML("afterend", '<p class="input-error text-danger">Negative number</p>');
    }else{
        inputField.insertAdjacentHTML("afterend", '<p class="input-error text-danger">Invalid input!! String</p>');
    }

}

// Expence and blance caculation
function expenceBalanceCalculation(){
    const incomeAmount = getInputValue('income-amount')
    const foodExpence = getInputValue('food-expence')
    const rentExpence = getInputValue('rent-expence')
    const clothExpence = getInputValue('cloth-expence')
    const totalExpence = foodExpence + rentExpence + clothExpence
    const balance = incomeAmount - totalExpence;

    if(incomeAmount >=  totalExpence){
        document.getElementById('total-expence').innerText = totalExpence
        document.getElementById('balance').innerText = balance
        balanceError.innerText =''
    }else if(incomeAmount == undefined || foodExpence == undefined || rentExpence == undefined || clothExpence == undefined){
        balanceError.innerText ='Set the Value of INPUT field or Input "0"'
    }else{
        balanceError.innerText = "Total Expenses is more than Income"
    }
}
// Saving calculation 
function savingCalculation(){
    const incomeAmount = getInputValue('income-amount')
    const savingPercent = getInputValue('saving-percent')
    const savingsAmountGet = document.getElementById('savings-amount')
    const remainingGet = document.getElementById('remaining-balance')
    const savingAmount = ((incomeAmount * savingPercent) / 100)
    const balance = parseFloat(document.getElementById('balance').innerText)
    if(balance >= savingAmount){
        const remainingBalance = balance - savingAmount
        savingsAmountGet.innerText = savingAmount
        remainingGet.innerText = remainingBalance
        savingError.innerText = ''
    }else {
        savingError.innerText = "Can't savings!! Savings is more than Blance"
        balanceError.innerText = savingsAmountGet.innerText = remainingGet.innerText = ""   
    }
}
// calculation event handaler
document.getElementById('calculate-btn').addEventListener('click', function(){
    expenceBalanceCalculation()
    
})
// Savings event handaler
document.getElementById('saving-btn').addEventListener('click', function(){
    savingCalculation()

})
