var $document = $(document),
    $window = $(window);

$(function(){
    'use strict';

    $('.js-phoneMask').mask("+7 (999) 999-99-99");
	
	$('.js-openDialog').MyCMSDialog();
	
	$document.on('click', '.js-openDialogAjax', function(){
        var $this = $(this),
            title = $this.data('title'),
            cssClass = $this.data('cssclass'),
            hrefID = $this.attr('href').split('#'),
            url = '/templates/popup/'+hrefID[1]+'.tpl.php';
        $.ajax({
            url: url,
            success: function(data){
                MyCMSDialog.closeAll();
                MyCMSDialog.open({
                    'title': title,
                    'cssClass': cssClass,
                    'content': data,
                    'open': function(){
                        $('.js-phoneMask').mask("+7 (999)-999-99-99");
                    }
                });
            }
        });
        return false;
    });

    $document.on('click', '.js-closeDialog', function(){
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

    $('.js-slider').slick();

    $document.on('click','.js-goUp',function(){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});

$window.on('scroll', function(){
    scrollTgglClass($('.js-goUp'), 300, 'visible');
});

function scrollTgglClass(obj, space, className) {
    if($window.scrollTop() > space) {
        obj.addClass(className);
    } else {
        obj.removeClass(className);
    }
}
