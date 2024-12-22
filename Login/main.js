const btnEnter = document.querySelector('.Enter__btn')

btnEnter.addEventListener("click", (e) => {
e.preventDefault()
    const inputName = document.querySelector('.name__input')

    const name = inputName.value

    if(name === '') {
        alert("Digite seu nome na primeira input para continuar!")
    } else {
        window.location.assign("/Pages/Home/index.html");
    }

})