// database
let datas = [
    {
        email: 'abc@gmail.com',
        password: 'abc',
    },
    {
        email: 'def@gmail.com',
        password: 'def',
    },
    {
        email: 'ghi@gmail.com',
        password: 'ghi',
    },
]





// dom from html
let loginBtn = document.getElementById('login_btn')
let emailFild = document.getElementById('email_fild')
let passwordFild = document.getElementById('password_fild')

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let email = emailFild.value
    let password = passwordFild.value
    let searchUser = datas.findIndex((user) => user.email == email)
    if (searchUser == -1) {
        console.log('user not found')
    } else if (datas[searchUser].password !== password) {
        console.log('user and password doesnot match')
    } else {
        window.location.pathname = './bank.html'
    }
        
        
})
