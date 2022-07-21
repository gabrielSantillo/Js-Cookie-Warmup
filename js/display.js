
let timesClicked = Cookies.get(`click_count`);
document.querySelector(`main`).insertAdjacentHTML(`afterend`, `<h1>The button one was clicked ${timesClicked} times.</h1>`);

let timesClickedTwo = Cookies.get(`click_count_two`);
document.querySelector(`main`).insertAdjacentHTML(`afterend`, `<h1>The button two was clicked ${timesClickedTwo} times.</h1>`);