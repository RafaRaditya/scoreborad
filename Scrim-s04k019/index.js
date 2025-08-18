let home = 0;
let guest = 0;

let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

function home_onepoint(){
    home += 1;
    homeEl.textContent = home;
}

function home_twopoints(){
    home += 2;
    homeEl.textContent = home;
}

function home_threepoints(){
    home += 3;
    homeEl.textContent = home;
}

function guest_onepoint(){
    guest += 1;
    guestEl.textContent = guest;
}

function guest_twopoints(){
    guest += 2;
    guestEl.textContent = guest;
}

function guest_threepoints(){
    guest += 3;
    guestEl.textContent = guest;
}