if(Cookies.get(`click_count`) === undefined){
    Cookies.set(`click_count`, 0);
}
 
function addToCount(details) {
    let click_count = parseInt(Cookies.get(`click_count`))  + 1;
    Cookies.set(`click_count`, click_count)
}

let button = document.querySelector(`button`);
button.addEventListener(`click`, addToCount)

if(Cookies.get(`click_count_two`) === undefined){
    Cookies.set(`click_count_two`, 0);
}
 
function addToCountTwo(details) {
    let click_count = parseInt(Cookies.get(`click_count_two`))  + 1;
    Cookies.set(`click_count_two`, click_count)
}

let button_two = document.getElementById(`two`)
button_two.addEventListener(`click`, addToCountTwo)