function showWithVar(){
    var text = 'Guilherme';
    var text = 'texto';
    
    if(true){
        var text = 'texto';
    }

    console.log(text);
}
function showWithLet(){
    let text = 'Guilherme';
    text = 'texto';
    
    if(true){
        let text = 'texto';
    }

    console.log(text);
}
showWithLet();