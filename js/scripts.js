let savingError = document.getElementById('saving-error-massage')
let balanceError = document.getElementById('blance-error-massage')
// Input value collect
function getInputValue(idName){
    const inputField = document.getElementById(idName)
    const inputValue = inputField.value
    return parseFloat(inputValue)
}
// Expence and blance caculation
function expenceBalanceCalculation(){
    const incomeAmount = getInputValue('income-amount')
    const foodExpence = getInputValue('food-expence')
    const rentExpence = getInputValue('rent-expence')
    const clothExpence = getInputValue('cloth-expence')
    const totalExpence = foodExpence + rentExpence + clothExpence
    const balance = incomeAmount - totalExpence;
    document.getElementById('total-expence').innerText = totalExpence
    document.getElementById('balance').innerText = balance
}
// Saving calculation 
function savingCalculation(){
    const incomeAmount = getInputValue('income-amount')
    const savingPercent = getInputValue('saving-percent')
    const savingAmount = ((incomeAmount * savingPercent) / 100)
    const balance = parseFloat(document.getElementById('balance').innerText)
    if(balance >= savingAmount){
        const remainingBalance = balance - savingAmount
        document.getElementById('savings-amount').innerText = savingAmount
        document.getElementById('remaining-balance').innerText = remainingBalance
    }else {
        savingError.innerText = "Can't savings!! Savings is more than Blance"
        balanceError.innerText = ""   
    }
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    expenceBalanceCalculation()
    
})
document.getElementById('saving-btn').addEventListener('click', function(){
    savingCalculation()

})

