//Business Logic
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

    console.log(newOrder);
  });
});
