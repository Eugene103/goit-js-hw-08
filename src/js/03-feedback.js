import throttle from "lodash.throttle";

const form = document.querySelector(`.feedback-form`);
const subBtn = document.querySelector(`button`);
const LOCAL_KEY = "feedback-form-state";

form.addEventListener(`input`, throttle(getInfo, 500));
function getInfo(evt) {
    const data = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data))
}

document.addEventListener(`DOMContentLoaded`, backInfo);
function backInfo(evt) {
        form.elements.email.value = JSON.parse(localStorage.getItem(LOCAL_KEY)).email;
    form.elements.message.value = JSON.parse(localStorage.getItem(LOCAL_KEY)).message;

}

subBtn.addEventListener(`click`, sendInfo);
function sendInfo(evt) {
    evt.preventDefault();
    console.log(localStorage.getItem(LOCAL_KEY))
    form.reset()
    localStorage.removeItem(LOCAL_KEY)
}