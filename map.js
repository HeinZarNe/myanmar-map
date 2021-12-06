let currentLocation = document.querySelector(".current-location span")
let map = document.querySelectorAll(".map path")


map.forEach(x => {
    x.addEventListener("mouseover", function() {
        currentLocation.innerText = x.getAttribute("title")
    })


})