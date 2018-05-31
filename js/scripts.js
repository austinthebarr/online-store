$(function(){
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var address = $("input#address").val();
    var date = $("input#date").val();
    var delprice = parseInt($("#delprice").val());
    var flowers = parseInt($("#flowers").val());
    var po = parseInt($("input:radio[name=po]:checked").val());

    var total = function() {
       return delprice + flowers + po;
     };

    $(".name").text(name);
    $(".address").text(address);
    $(".date").text(date);
    $(".total").text(total());
    // $(".delprice").text(delprice);
    // $(".flowers").text(flowers);
    // $(".po").text(po);

    $("#results").show();

     event.preventDefault();
  });
});


// var total = function(delprice, flowers, po) {
//    return delprice + flowers + po;
//  };
