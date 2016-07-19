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
$('.shopping-list').on('click','.shopping-item-delete',function(event){this.closest("li").remove();})

})