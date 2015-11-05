var day = 24 * 60 * 60 * 1000;

$(function() {
    $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 2,
         changeYear: true,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 2,
         changeYear: true,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });





$('#datebutton').click(function(){
    var startDate = $('#from').val();
    var startDateOb = new Date(startDate);
    var endDate = $('#to').val();
    var endDateOb = new Date(endDate);
    var difference = Math.ceil((endDateOb - startDateOb)/day);
    $('#startDate').text(startDate);
    $('#endDate').text(endDate);
    $('#daysBetween').text(difference);
});
