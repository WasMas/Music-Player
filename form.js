const container = document.querySelector('.border');
const SignupLink = document.querySelector('.reg');
const LoginLink = document.querySelector('.log')

SignupLink.addEventListener('click', ()=>{
    container.classList.add('active');
})

LoginLink.addEventListener('click', ()=>{
    container.classList.remove('active')
})