var span = $('span');
span.each(function(index, element){
  if (index % 2 !== 0){
    $(element).css('color', 'red');
  }
});
var paragraphs = $('p:odd');
paragraphs.each(function(index, element){
  var button = '<button class="btn" data-tmp="' + (index + 1) + '">click</button>'
  $(element).append(button);
})
$('button').click(function(){
  alert($(this).attr('data-tmp'));
})
