import MyComponent from '../my-component/my-component.js'

let btn = document.getElementById("send-button");

btn.addEventListener("click", () => {
    let answersElements = document.querySelectorAll("my-component");
    Array.from(answersElements).map(function (e, i) {
        console.log("svar på spørsmål " + (i + 1) + ":", e.state);
    })
});
let registerChangeInState = function (evt) {
    let state = evt.detail.state;
    console.log(`State for ${evt.target.id} changed to ${state ? state : 'nothing'}`);
}
let allMyComponents = document.querySelectorAll("my-component");
for (const comp of allMyComponents) {
    comp.addEventListener("change-state", registerChangeInState);
}



