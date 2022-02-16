// Input value collect function
function getInputValue(idName){
    const inputField = document.getElementById(idName)
    const inputValue = inputField.value
    return parseInt(inputValue)
}

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

document.getElementById('calculate-btn').addEventListener('click', function(){
    expenceBalanceCalculation()

})

