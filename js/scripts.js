//Business Logic
function Pizza(topping1,topping2,topping3,size){
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

Pizza.prototype.price = function () {
  return this.topping1 + this.topping2 + this.topping3 + this.size;
};


function Order(name,number){
  this.name = name;
  this.number = number;
  this.pizzas= [];
}

function resetFields() {
    $("#name").val("");
    $("#number").val("");
    $(".topping1").val("");
    $(".topping2").val("");
    $(".topping3").val("");
    $(".size").val("");
    $("#street").val("");
    $("#city").val("");
    $("#state").val("");
    $("#zipcode").val("");
}

//UserInterface Logic
$(document).ready(function(){
  $("#add-button").click(function(){
     $("#add-order").append('<div class="new-order">' +
                               '<h4>Choose up to 3 toppings:</h4>' +
                               '<div class="form-group">' +
                                 '<label for="toppings"><em>Topping 1:</em></label>' +
                                 '<select class="form-control topping1">' +
                                   '<option selected="true" value="0">Please select one:</option>' +
                                   '<option value="1">Cheese</option>' +
                                   '<option value="1.5">Onions</option>' +
                                   '<option value="1.75">Olives</option>' +
                                   '<option value="1.25">Mushrooms</option>' +
                                   '<option value="2">Artichokes</option>' +
                                 '</select>' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="toppings"><em>Topping 2:</em></label>' +
                                 '<select class="form-control topping2">' +
                                   '<option selected="true" value="0">Please select one:</option>' +
                                   '<option value="1">Cheese</option>' +
                                   '<option value="1.5">Onions</option>' +
                                   '<option value="1.75">Tomatoes</option>' +
                                   '<option value="1.25">Mushrooms</option>' +
                                   '<option value="2">Artichokes</option>' +
                                 '</select>' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="toppings"><em>Topping 3:</em></label>' +
                                 '<select class="form-control topping3">' +
                                   '<option selected="true" value="0">Please select one:</option>' +
                                   '<option value="1">Cheese</option>' +
                                   '<option value="1.5">Onions</option>' +
                                   '<option value="1.75">Olives</option>' +
                                   '<option value="1.25">Red peppers</option>' +
                                   '<option value="2">Artichokes</option>' +
                                 '</select>' +
                               '</div>' +
                               '<h4>Choose a size:</h4>' +
                               '<div class="form-group">' +
                                 '<select class="form-control size">' +
                                   '<option selected="true" value="0">Please select one:</option>' +
                                   '<option value="5">Small</option>' +
                                   '<option value="10">Medium</option>' +
                                   '<option value="15">Large</option>' +
                                 '</select>' +
                               '</div>' +
                             '</div>');


   });

  $("#orderform").submit(function(event){
    event.preventDefault();
    var inputName = $("#name").val();
    var inputNumber = $("#number").val();
    var newOrder = new Order(inputName,inputNumber);

    var topping1 = parseFloat($(".topping1").val());
    var topping2 = parseFloat($(".topping2").val());
    var topping3 = parseFloat($(".topping3").val());
    var size = parseFloat($(".size").val());
    var pizza = new Pizza(topping1,topping2,topping3,size);


    $("#add-name").text(newOrder.name);
    $("#price").text(pizza.price());
    $("#orderform").hide();
    $("#output, #delivery-option").show();
    $("#order").show();

   });


  $("#yes-deliver").click(function(){
    $(" #delivery-option").hide();
    $("#address").show();
  });

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


  $("button#no-deliver").click(function(){
    $("#delivery-option").hide();
     $("#pick-up").show();
     $("#new-order-button").show();
  });

  $("#new-order-button").click(function(event){
    resetFields();
    $("#orderform").show();
    $("#delivery,#pick-up,#output").hide();

   });

   $("#new-order-button").hide();
  });
