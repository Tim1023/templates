$(document).on('mouseenter', '[data-toggle="tab"]', function () {
    $(this).tab('show');
});
$(document).on('click', '[data-toggle="tab"]', function () {
    window.location.href=$(this).attr("data-url");
});