(function($) {
    $.fn.impnotification = function(options) {
        return this.each(function() {

            var settings = $.extend({
                'id' : 'impnoti',
                'duration' : 15000,
            }, options);

            $('#' + settings.id).remove();
            open(settings.id, settings.text);

            $('body').on('click', '#' + settings.id + '>span.inclose', function() {
                $(this).parent().fadeOut(300, function() {
                    $(this).remove();
                });
            });
            
            function open(id, text) {
                $('<div class="impnoti" id="' + settings.id + '">\
                        <span class="inclose"></span>\
                        <div class="impbody">' + text + '</div>\
                    </div>').appendTo('body').hide().fadeIn(300);
                var audioElement = document.createElement('audio');
                audioElement.setAttribute('src', settings.path + 'insound.ogg');
                audioElement.play();
                
                setTimeout(function(){
                    $( '#'+id+' span.inclose').trigger('click');
                },settings.duration);
                
            }
        });
    };
})(jQuery);