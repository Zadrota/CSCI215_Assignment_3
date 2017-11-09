function countDown(){
    var charLeft = 50 - jQuery('.input').val().length;
    console.log(jQuery('.input').val().length);
    if(jQuery('.input').val().length > 50){
        $('.countdown').css("color","red");
    }
    jQuery('.countdown').text(charLeft + ' characters remaining.');
}

jQuery(document).ready(function($){
    countDown();
    $('.input').change(countDown);
    $('.input').keyup(countDown);
});