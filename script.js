var typePrice = [1, 2, 3];
var tierPrice = [1, 1.5, 2];

function update(){
  var type = $('#stockType').val();
  var animals = $('#animalsNumber').val();
  var tier = $('#tier').val();
  
   if($('#discount').val()!=''){
      var discount = $('#discount').val();
   }
  else
    {
      var discount = 0;
    }
  
  var price = animals*typePrice[type]*tierPrice[tier] ;
  $('#prev').html(price);
  price*=(100-discount)/100;
  console.log(discount);
  $('#price').html(price);
}
$('select').change(function(){
  update();
});
$('input').change(function(){
  update();
});