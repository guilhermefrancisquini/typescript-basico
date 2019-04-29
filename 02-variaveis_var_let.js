function showWithVar() {
    var text = 'Guilherme';
    var text = 'texto';
    if (true) {
        var text = 'texto';
    }
    console.log(text);
}
function showWithLet() {
    var text = 'Guilherme';
    text = 'texto';
    if (true) {
        var text_1 = 'texto';
    }
    console.log(text);
}
showWithLet();
