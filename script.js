const secret = document.getElementById("GoodDay")
const showMessage = function () {
    secret.innerHTML = "Have a good day, Sensei!"


}

const dictionary = {
    1: "pinksakura.jpg",
    2: "nightjapan.jpeg",
    3: "Japan.jpeg"
}
let iterator = 1

const changePicture = (direction) => {
    if (direction == "next") {
        if (iterator == 3) {
            iterator = 1
        } else {
            iterator++
        }
    } else {
        if (iterator == 1) {
            iterator = 3
        }
        else {
            iterator--
        }
    }
    document.getElementById('sakura').src = dictionary[iterator]
    // console.log(iterator)
    // console.log(dictionary[iterator])
}