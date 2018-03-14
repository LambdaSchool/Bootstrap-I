$('.btn-custom').on('click', (event) => {
    sectionSelector = '.' + event.target.id;

    // Display the correct section
    $('section').hide();
    $(sectionSelector).show();

    // Highlight the correct button
    $('.btn-custom').removeClass('active-custom');
    $(event.target).addClass('active-custom');
})