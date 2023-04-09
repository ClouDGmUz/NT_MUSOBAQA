const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header"),
  signupBtn = document.querySelector(".signupBtn"),
  userName = document.querySelector(".userName"),
  signupEmail = document.querySelector(".signupEmail"),
  signupPwd = document.querySelector(".signupPwd"),
  loginBtn = document.querySelector(".loginBtn"),
  loginEmail = document.querySelector(".loginEmail"),
  loginPwd = document.querySelector(".loginPwd"),
  sectionLevel = document.querySelector(".sectionLevel"),
  logout = document.querySelector(".logout"),
  user_name = document.querySelector(".username");

loginHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
    wrapper.classList.add("noactive");
});
signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("noactive");
    wrapper.classList.add("active");
});

signupBtn.addEventListener("click", () => {
    if (userName.value !== '' || signupEmail.value !== '' || signupPwd.value !== '') {
        let username = localStorage.setItem("username", userName.value);
        let email = localStorage.setItem("email", signupEmail.value);
        let pwd = localStorage.setItem("pwd", signupPwd.value);
        wrapper.classList.remove("active");
        wrapper.classList.add("noactive");
    }
})

loginBtn.addEventListener("click", ()=>{
    let getUsername = localStorage.getItem("username");
    let getEmail = localStorage.getItem("email");
    let getpwd = localStorage.getItem("pwd");

    if (loginPwd.value == getpwd && loginEmail.value == getEmail) {
        wrapper.classList.add("hide");
        sectionLevel.classList.remove("hide");
        // window.location.hash = '#user' + `?user=${getUsername}`;
        // location.reload()
        user_name.innerHTML = `Hello ${getUsername}!`;
    } else{
        window.location.hash = '#login';
        location.reload()
    }
})

logout.addEventListener('click', ()=>{
    wrapper.classList.remove("hide");
    sectionLevel.classList.add("hide");
})

window.addEventListener("load", () => {
    let getUsername = localStorage.getItem("username");
    let getEmail = localStorage.getItem("email");
    let getpwd = localStorage.getItem("pwd");

    let hash = window.location.hash.split('?');
    wrapper.classList.remove("noactive");
    wrapper.classList.add("active");

    if (hash == 'login') {
        wrapper.classList.remove("active");
        wrapper.classList.add("noactive");
    } else if (getUsername && getEmail && getpwd) {
        wrapper.classList.add("active");
        wrapper.classList.remove("noactive");
    }

    wrapper.classList.remove("active");
});

const cards = document.querySelectorAll(".btn-hover");

let cardOne, cardTwo;

function flipCard(e){
    let clickedCard = e.target;
    if(clickedCard !== cardOne){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;

        let cardOneIndex = cardOne.getAttribute("data-index");
        let cardTwoIndex = cardTwo.getAttribute("data-index");
        matchCard(cardOneIndex, cardTwoIndex);
    }
}

function matchCard(indexOne, indexTwo) {
    if(indexOne === indexTwo){
        console.log("Card Matched!");
    }
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
}

cards.forEach(card => {
    card.addEventListener("click", flipCard)
})