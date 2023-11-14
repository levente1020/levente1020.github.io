$(document).ready(function(){
    $('.gallery-image').click(function(){
        var src = $(this).find('img').attr('src');
        $('#modal-image').attr('src', src);
        $('#lightbox-modal').css('display', 'block');
    });

    $('.close').click(function(){
        $('#lightbox-modal').css('display', 'none');
    });
});
