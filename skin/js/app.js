$(function(){
    'use strict';

	var $document = $(document);

    $('.js-phone-mask').mask("+7 (999) 999-99-99");
	
	$('.js-open-dialog').MyCMSDialog();
	
	$document.on('click', '.js-open-dialog-ajax', function(){
        var $this = $(this),
            title = $this.data('title'),
            cssClass = $this.data('cssclass'),
            hrefID = $this.attr('href').split('#'),
            url = '/templates/block/'+hrefID[1]+'.tpl.php';
        $.ajax({
            url: url,
            success: function(data){
                MyCMSDialog.closeAll();
                MyCMSDialog.open({
                    'title': title,
                    'cssClass': cssClass,
                    'content': data,
                    'open': function(){
                        $('.phone-mask').mask("+7 (999)-999-99-99");
                    }
                });
            }
        });
        return false;
    });

    $document.on('click', '.js-close-dialog', function(){
        MyCMSDialog.closeAll();
        return false;
    });

    $document.on('submit', '.search', function(){
        var $searchInp = $(this).find('.search__input'),
            value = $searchInp.val();
        if($.trim(value)==""){
            $searchInp.focus();
            return false;
        }
    });

    $document.lightGallery({
        selector: '.lightbox',
        thumbnail: false,
        download: false
    });

    svg4everybody();

    $('#main_slider').slick({
        fade: true,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 800
    });

    $document.on('click','.js-go-up',function(){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});

$(window).on('scroll', function(){
    if ($(this).scrollTop() > 300) {
        $('.js-go-up').addClass('visible');
    } else {
        $('.js-go-up').removeClass('visible');
    }
});