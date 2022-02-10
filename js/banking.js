let depositValue = document.getElementById('deposit_value')
let withdrawValue = document.getElementById('withdraw_value')
let balanceValue = document.getElementById('balance_value')
let addDepo = document.getElementById('addDepo')
let addDepo_btn = document.getElementById('addDepo_btn')
let addWith = document.getElementById('addWith')
let addWith_btn = document.getElementById('addWith_btn')



addDepo_btn.addEventListener('click', (e) => {
    let depositValueNumber = parseFloat(depositValue.innerText)
    let depositInput = parseFloat(addDepo.value)
    // deposit value change
    depositValueNumber = depositValueNumber + depositInput
    depositValue.innerText = depositValueNumber
    // balance value change 
    let balance = parseFloat(balanceValue.innerText)
    let totalBalance = depositInput + balance
    balanceValue.innerText = totalBalance
    addDepo.value = ''
})

addWith_btn.addEventListener('click', (e) => {
    let withdrawValueNumber = parseFloat(withdrawValue.innerText)
    let withdrawInput = parseFloat(addWith.value)
    // deposit value change
    withdrawValueNumber = withdrawValueNumber + withdrawInput
    withdrawValue.innerText = withdrawValueNumber
    // balance value change 
    let balance = parseFloat(balanceValue.innerText)
    let totalBalance = balance - withdrawInput
    balanceValue.innerText = totalBalance
    addWith.value = ''
})