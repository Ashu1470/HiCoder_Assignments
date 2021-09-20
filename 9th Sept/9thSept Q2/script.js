document.addEventListener("DOMContentLoaded",() => {
    let element = document.getElementsByClassName("img")[0]
    element.innerText = "Adding Image Dynamically"
    setTimeout(() => {
        element.innerText = "";
        element.innerHTML = `<img src="https://wallpapercave.com/wp/vDy3sUb.jpg" />`;
        // element.style.background = "url('https://picsum.photos/seed/picsum/200/300')"
    },1000)
})