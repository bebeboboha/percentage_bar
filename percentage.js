$(document).ready(function() {
    $('.bar').each(function() {
        $(this).find('.cont').animate({
            width: $(this).find('span').text()
        }), 10000
    })

})
