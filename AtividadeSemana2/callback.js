// CALL BACK
function ordem (mensagem,callback) {
    console.log(mensagem);
    callback();
}
ordem ('primeira msg', function (){
    console.log('segunda msg');

});
