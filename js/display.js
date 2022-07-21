let timesClicked = Cookies.get(`click_count`);
document.querySelector(`main`).insertAdjacentHTML(`afterend`, `<h1>The button was clicked ${timesClicked} times.</h1>`);