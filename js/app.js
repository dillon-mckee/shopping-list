$(document).ready(function() {
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  var newItem = ''
        + '<li>'
        + '<span class="shopping-item">'
        + $("#shopping-list-entry").val()
        + '</span>'
        + '<div class="shopping-item-controls">'
        + '<button class="shopping-item-toggle">'
        + '<span class="button-label">check</span>'
        + '</button> '
        + '<button class="shopping-item-delete">'
        + '<span class="button-label">delete</span>'
        + '</button>'
        + '</div>'
        + '</li>';
	$(newItem).appendTo(".shopping-list");
  $(this)[0].reset();
})
$('.shopping-list').on('click','.shopping-item-delete',function(event) {
    $(this).closest("li").remove();
})

$('.shopping-list').on('click','.shopping-item-toggle', function(event) {
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});

$('body').on('click','button.toggle-checked', function(event) {
    $('.shopping-list').find(".shopping-item__checked").closest("li").toggleClass("item-hide");
})

$('body').on('click','button.toggle-unchecked', function(event) {
    $('.shopping-list').find("span[class='shopping-item']").closest("li").toggleClass("item-hide");
});

$('#js-shopping-search-form').submit(function(event) {
   event.preventDefault();
   var searchValue = $("#shopping-search-entry").val();
   if (searchValue == "") {return;};
    $('body').find(".search-result").toggleClass("search-result");
   console.log(searchValue);
   $('.shopping-list').find("span:contains('"+ searchValue +"')").closest("li").toggleClass("search-result");
   $(this)[0].reset(); 
});

//end
});
