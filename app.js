const form = document.querySelector('form');
const errorMsg = document.querySelectorAll('.error-message');
const errorMsg2 = document.querySelector('.error-message2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = form.elements.firstName;
    const lastName = form.elements.lastName;
    const email = form.elements.email;
    const password = form.elements.password;
    const arr = [firstName, lastName, email, password];
    let i = 0;
    for (const element of arr) {
        if (element.value === '') {
            element.classList.add("warning");
            element.classList.add("mark");
            errorMsg[i].classList.remove("hide");
        } else {
            element.classList.remove("warning");
            element.classList.remove("mark");
            errorMsg[i].classList.add("hide");
        }
        i++;
    }
})