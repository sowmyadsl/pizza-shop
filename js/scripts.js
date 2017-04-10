//******business-logic

//order object to store customer name and phone number
function Order(customerName,customerPhoneNumber){
  this.name=customerName;
  this.number=customerPhoneNumber;
}

//pizza object to store selected toppings price and size of the pizza
function Pizza(toppingsPrice,size){
  this.toppingsPrice = toppingsPrice;
  this.size = size;
}

//method to calculate price of each pizza
Pizza.prototype.price = function () {
  return this.toppingsPrice + this.size;
};

//function to reset all fields
function resetFields() {
  $("#name").val("");
  $("#number").val("");
   $(".new-order :checked").prop("checked", false);
  $('select').prop('selectedIndex', 0);
  $("#street").val("");
  $("#city").val("");
  $("#state").val("");
  $("#zipcode").val("");
}

//*************UI logic **************************//
$(document).ready(function(){
  //lets customer add another form to order pizza
  $("#add-button").click(function(){
    //adds another DOM element to the existing order
    $("#add-order").append('<div class="new-order">'+
    '<div class="form-group">'+
    '<h4> Please Choose any of the following toppings :</h4>'+
    '<input type="checkbox" name="toppings" value=1.25>Onions<br>'+
    '<input type="checkbox" name="toppings" value=1.25>Tomatoes <br>'+
    '<input type="checkbox" name="toppings" value=1.25>Red Peppers<br>' +
    '<input type="checkbox" name="toppings" value=1.25>Mushrooms<br>' +
    '<input type="checkbox" name="toppings" value=1.25>Spinach<br>'+
    '<input type="checkbox" name="toppings" value=1.25>Artichokes<br>' +
    '<input type="checkbox" name="toppings" value=1.25>Cheese' +
    '</div>'+
    '<br>'+
    '<div class="form-group">' +
    '<label for="size">Select size of the pizza:</label>' +
    '<select class="form-control" id="size">'+
    '<option disabled selected="true" value="">Pick a size</option>'+
    '<option value="5">8 inch (S)</option>'+
    '<option value="10">12 inch (M)</option>'+
    '<option value="15">14 inch (L)</option>'+
    '</select>'+
    '</div>'+
    '</div>');
});

//submits the order form
$("#orderForm").submit(function(event){
  event.preventDefault();
  var inputName = $("#name").val();
  var inputNumber = $("#number").val();
  var totalPrice = 0;
  var newOrder = new Order(inputName,inputNumber)

//function for each pizza order
  $(".new-order").each(function(){
    //initializing toppingsPrice value to 0 for every new pizza order
    var toppingsPrice = 0;
    //for specific dom element finds each checkbox that is checked
    $(this).find("input:checkbox[name=toppings]:checked").each(function(){
      //updating toppingsPrice for the checked topping.
      toppingsPrice += parseFloat($(this).val());
    });
    //obtaining the value of the selected pizza size in the current order
    var inputSize = parseFloat($(this).find("#size").val());
    //create a object pizza to store toppingsPrice and size.
    var pizzaOrder = new Pizza(toppingsPrice,inputSize);
    //invokes to calculate the finalprice of the pizza ordered.
    totalPrice += pizzaOrder.price();

  });
  $("#add-name").text(newOrder.name);
//prints the price of the order
$("#price").append(totalPrice);
//hides the form
$("#orderForm").hide();
$("#output,#delivery-option").show();
$("#order").show();

});

//function when customer clicks on yes for delivery
$("#yes-deliver").click(function(){
  //hides the delivery-option
  $(" #delivery-option").hide();
  //shows the address form
  $("#address").show();
});

//function when customer clicks on submit button
$("form#address").submit(function(event){
  event.preventDefault();
  var inputStreet = $("#street").val();
  var inputCity = $("#city").val();
  var inputState = $("#state").val();
  var inputZipcode = $("#zipcode").val();
  var inputAddress = (inputStreet + "," + inputCity + "," + inputState + "," + inputZipcode).toUpperCase();
  $("#address").hide();
  $("#push-address").text(inputAddress);
  $("#delivery").show();
  $("#new-order-button").show();
});

//function when customer clicks on no-deliver button
$("button#no-deliver").click(function(){
  $("#delivery-option").hide();
  $("#pick-up").show();
  $("#new-order-button").show();
});

//function when customer wants to add a new order
$("#new-order-button").click(function(){
  //reset all fields
  resetFields();
  //show new form
  $("#orderForm").show();
  //hides all other fields
  $("#delivery,#pick-up,#output").hide();
  //hide the new order button
  $("#new-order-button").hide();

 // I didnt know any other way to remove multiple dom elements of new order class so i ran a counter and removed everything except first instance.
  var counter = 1;
  $(".new-order").each(function(){
    if (counter === 1){
      //do nothing
    }else {
      $(this).last().remove();
    }
    counter+=1;
  });

}); // closes the new-order-button function

 }); //close document
