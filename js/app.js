Cookies.set(`click_count`, 0);


function addToCount(details) {
    let click_count = parseInt(Cookies.get(`click_count`))  + 1;
    Cookies.set(`click_count`, click_count)
}

let button = document.querySelector(`button`);
button.addEventListener(`click`, addToCount)