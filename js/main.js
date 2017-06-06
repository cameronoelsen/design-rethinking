$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
        $('#navbar').toggleClass('open');
        $('#nav-brand').toggleClass('open');
	});
    $(document).scroll(function() {
        var href = document.location.href;
        var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
        if (lastPathSegment === '' || lastPathSegment === 'index.html' && $(document).scrollTop() > 500) {
            $('#home-brand').css("opacity", "1");
        }
        else {
            $('#home-brand').css("opacity", "0");
        }
    });
});
