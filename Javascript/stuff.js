//self executing function to make everything tight and safe
(function () {

    //Make some cool jquery variables
    var h1Value = $('h1').text();
    var $list = $('li');
    var $ol = $('ol');

    //Short hand for document ready function
    $(function () {
        $list.addClass('list-item');
        $('#intro').children('p').css('font-style', 'italic');
        $('#quote span').text(h1Value);


        //Grab a button and when it's clicked call a function
        $('#hide').click(hideList);

        function hideList() {
            $ol.hide();
        }

        //function that is attached to the click event
        $('#show').click(function () {
            $ol.fadeIn(4000);

        });

    });

})();
