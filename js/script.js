let newImage = document.getElementById('myImage')

function change() {
    newImage.src = "./images/neo.jpg"
}

// newImage.onclick = change()

newImage.addEventListener("click", change())

