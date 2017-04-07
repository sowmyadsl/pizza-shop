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
}





//UserInterface Logic
$(document).ready(function(){










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

    
    $("#insert-name").text(newOrder.name);
    $("#price").text(pizza.price());
    $("#output, #delivery-option").show();
    $("#order").show();

  });

  $("#yes-deliver").click(function(){
    $("#output, #delivery-option").hide();
    $("#address").show();

  });

  $("#address").submit(function(event){
    event.preventDefault();
    var inputStreet = $("#street").val();
    var inputCity = $("#city").val();
    var inputState = $("#state").val();
    var inputZipcode = $("#zipcode").val();
    var address = (inputStreet + "," + inputCity + "," + inputState + "," + inputZipcode).toUpperCase();
    $("#insert-address").text(address);
    $("#delivery").show();
    $("#address").hide();


  });
  });
