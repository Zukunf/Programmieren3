let clickCount = 0;
function clickHandler(evt) {
    clickCount++;
    console.log(evt);
    const str = "Thanks for clicking " + clickCount;
    this.innerText = str;
}