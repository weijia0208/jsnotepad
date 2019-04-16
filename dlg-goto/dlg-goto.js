/*exported $dlgGoto*/
var $dlgGoto = (function(){

  var $dlg = $(''
              +'<div class="notepad-goto-dlg">'
              +'<div class="dialogbox">'
              +'<div class="titlebar">'
              +'<p>转到指定行</p>'
              +'<span class="btn-close">×</span>'
              +'</div>'
              +'<div class="main">'
              +'<label for="">行号(L):</label><br>'
              +'<input class="line-num" type="text" autofocus><br>'
              +'<input class="btn-goto" type="button" value="转到">'
              +'<input class="btn-cancel" type="button" value="取消">'
              +'</div>'
              +'</div>'
              +'</div>');
  var $btnClose = $dlg.find('.btn-close'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $txtLineNum = $dlg.find('.line-num'),
      $btnGoto = $dlg.find('.btn-goto'),
      $titlebar = $dlg.find('.titlebar');
  var cfg = {
    curLine:1,
    totalLines:1,
    gotoHandler:null
  };

  function destory(){$dlg.remove();}


  function validation(){
    var num = Number($txtLineNum.val());

    if(num === 0||num>cfg.totalLines){
      alert('行数超过了总行数！');
      return false;
    }
    return true;
  }

  function gotoHandler(){
    if(!validation()) return ;

    cfg.gotoHandler($txtLineNum.val());
    destory();
  }

  function filterKey(e){
    if(!/[0-9]/.test(e.key)){
      e.preventDefault();
      alert('不能输入数字以外的非法字符！');
    }
  }

  var init = function(conf){
    $.extend(cfg,conf);
      
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle:$titlebar});
    $txtLineNum.val(cfg.curLine);
    $txtLineNum.select();
    $txtLineNum.keypress(filterKey);
    
    $btnClose.click(destory);
    $btnCancel.click(destory);
    $btnGoto.click(gotoHandler);
  };

  return {init:init};
}());
