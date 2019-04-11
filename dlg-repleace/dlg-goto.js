/*exported $dlgGoto*/
var $dlgGoto = (function(){
  var init = function(){
    
    var DOM = ''
              + '<div class="notepad-goto-dlg">'
              + '<div class="dialogbox">'
              + '<div class="titlebar">'
              + '<p>查找</p>'
              + '<span class="btn-close">×</span>'
              + '</div>'
              + '<div class="main">'
              + '<label class="sec">查找内容(N):</label>'
              + '<input class="line-num" type="text" autofocus>'
              + '<input class="btn-goto" type="button" value="查找下一个(F)"><br>'
              + '<div class="replace">'
              + '<label class="sec">替换为(P):</label>'
              + '<input class="line-num" type="text">'
              + '<input class="btn-goto" type="button" value="替换(R)"><br>'
              + '</div>'
              + '<input class="all" type="button" value="全部替换(A)">'
              + '<div class="glw">'
              + '<input type="checkbox">'
              + '<label >区分大小写</label>'
              + '</div>'
              + '<input class="btn-cancel" type="button" value="取消">'
              + '</div>'
              + '</div>'
              + '</div> ';

            
    var $dlg = $(DOM);
    var $btnClose = $dlg.find('.btn-close'),
        $btnCancel = $dlg.find('.btn-cancel');
  
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
  
  
    $btnClose.click(function(){$dlg.remove();});
    $btnCancel.click(function(){$dlg.remove();});
    
  };

  return {init:init};
}());
