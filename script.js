for (var i = 0; i < document.querySelectorAll(".text").length; i++) {
    document.querySelectorAll(".text")[i].addEventListener("click", function () {

        makeSound(this.innerHTML.toLowerCase());

    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key.toLowerCase());

    buttonAnimation(event.key.toLowerCase());
});

function makeSound(key) {

    switch (key) {
        case "a":
            var key01 = new Audio("sounds/key01.mp3");
            key01.play();
            break;

        case "s":
            var key02 = new Audio("sounds/key02.mp3");
            key02.play();
            break;

        case "d":
            var key03 = new Audio('sounds/key03.mp3');
            key03.play();
            break;

        case "w":
            var key04 = new Audio('sounds/key04.mp3');
            key04.play();
            break;

        case "e":
            var key05 = new Audio('sounds/key05.mp3');
            key05.play();
            break;

        case "f":
            var key06 = new Audio('sounds/key06.mp3');
            key06.play();
            break;

        case "g":
            var key07 = new Audio('sounds/key07.mp3');
            key07.play();
            break;


        case "h":
            var key08 = new Audio('sounds/key08.mp3');
            key08.play();
            break;

        case "j":
            var key09 = new Audio('sounds/key09.mp3');
            key09.play();
            break;

        case "t":
            var key10 = new Audio('sounds/key10.mp3');
            key10.play();
            break;

        case "y":
            var key11 = new Audio('sounds/key11.mp3');
            key11.play();
            break;

        case "u":
            var key12 = new Audio('sounds/key12.mp3');
            key12.play();
            break;

        case "k":
            var key13 = new Audio('sounds/key13.mp3');
            key13.play();
            break;

        case "l":
            var key14 = new Audio('sounds/key14.mp3');
            key14.play();
            break;

        case "č":
            var key15 = new Audio('sounds/key15.mp3');
            key15.play();
            break;

        case "o":
            var key16 = new Audio('sounds/key16.mp3');
            key16.play();
            break;

        case "p":
            var key17 = new Audio('sounds/key17.mp3');
            key17.play();
            break;

        default: console.log(key);

    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("animation");

    setTimeout(function () {
        activeButton.classList.remove("animation");
    }, 100);

}