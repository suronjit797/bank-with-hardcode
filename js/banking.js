// all
function takeInput(inputId, outputId, isAdd) {
    const getElement = document.getElementById(inputId)
    let balance = document.getElementById('balance_value')
    balanceValue = parseFloat(balance.innerText)
    let getElementValue = parseFloat(getElement.value) > 0 ? parseFloat(getElement.value) : 0
    if (!isAdd && balanceValue < getElementValue) {
        getElementValue = 0
        console.log('you haven\'t enough money')
    }
    // set output
    let outputValueText = document.getElementById(outputId)
    let outputValue = parseFloat(outputValueText.innerText)
    outputValueText.innerText = outputValue + getElementValue
    // balance update
    if (isAdd) {
        let totalValue = balanceValue + getElementValue
        balance.innerText = totalValue
    } else {
        let totalValue = balanceValue - getElementValue
        balance.innerText = totalValue
    }
    return outputValue
}
// deposit
document.getElementById('addDepo_btn').addEventListener('click', () => {
    takeInput('addDepo', 'deposit_value', true)
})
// withdraw
document.getElementById('addWith_btn').addEventListener('click', () => {
    takeInput('addWith', 'withdraw_value', false)
})