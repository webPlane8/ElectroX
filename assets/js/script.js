$(document).ready(function(){
    $(document).on('mouseover', '.sub-categories > ul > li > a', function() {
        $(this).addClass('animate__animated animate__shakeY');
    });

    $(document).on('mouseout', '.sub-categories > ul > li > a', function() {
        $(this).removeClass('animate__animated animate__shakeY');
    });

    // $(document).on('click', '.categories', function(){});
});