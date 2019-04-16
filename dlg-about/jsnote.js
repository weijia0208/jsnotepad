/*exported $jsNote*/
var $jsNote = (function(){

  var DOM = ''
            +'<div>'
            +'<div class="container">'
            +'<div class="top">'
            +'<p class="title">关于“记事本”</p>'
            +'<span class="close">×</span>'
            +'</div>'
            +'<div class="content">'
            +'<h1 class="jsnote">JSNotepad</h1>'
            +'<hr>'
            +'<div class="text">'
              +'<p>作者：佳佳</p>'
              +'<p>QQ：1002475276</p>'
              +'<p>仓库地址：<a href="https://github.com/weijia0208/jsnotepad" target="_blank">https://github.com/weijia0208/jsnotepad</a></p>'
            +'</div>'
            +'<input type="button" value="确定" class="del">'
            +'</div>'
            +'</div>'
            +'</div>';
  
  var $jnp = $(DOM),
      $close = $jnp.find('.close'),
      $del = $jnp.find('.del');
      

  var show = function(){
    $('body').append($jnp);
    $jnp.find('.container').draggable({handle:$jnp.find('.top')});
    $close.click(function(){
      $jnp.remove();
    });
    $del.click(function(){
      $jnp.remove();
    });
  };
  return {show:show};
}());
