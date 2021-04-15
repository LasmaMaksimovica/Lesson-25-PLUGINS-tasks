$('.small-img img').hover(function () {
    const changingImage = $(this).attr('src');
    $('#changing-image').attr('src', changingImage);
});