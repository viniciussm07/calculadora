function screenNum (num) {
    var screen = document.querySelector('#screen').value

    screen = screen + num;
    document.querySelector('#screen').value = screen

    console.log(screen);
}