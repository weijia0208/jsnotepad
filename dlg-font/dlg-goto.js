/*exported $dlgGoto*/
var $dlgGoto = (function(){
  var init = function(){
    
    var DOM = ''
              + '<div class="notepad-goto-dlg">'
              + '<div class="dialogbox">'
              + '<div class="titlebar">'
              + '<p>字体</p>'
              + '<span class="btn-close">×</span>'
              + '</div>'
              + '<div class="main">'
              + '<div class="left">'
              + '<p>字体(F):</p>'
              + '<select id="font" name="">'
              + '<option>隶书</option>'
              + '<option value="">楷体</option>'
              + '<option value="">宋体</option>'
              + '<option value="">微软雅黑</option>'
              + '<option value="">幼圆</option>'
              + '<option value="">华文中宋</option>'
              + '</select>'
              + '</div>'
              + '<div class="mid">'
              + '<p>字形(Y):</p>'
              + '<select id="type" name="">'
              + '<option value="">常规</option>'
              + '<option value="">倾斜</option>'
              + '<option value="">粗体</option>'
              + '<option value="">粗偏斜体</option>'
              + '</select>'
              + '</div>'
              + '<div class="right">'
              + '<p>大小(P):</p>                                                              <select id="sort" name="">'
              + '<option value="">四号</option>'
              + '<option value="">五号</option>'
              + '<option value="">六号</option>'
              + '<option value="">七号</option>'
              + '</select>'
              + '</div>'
              + '<div class="area">'
              + '<fieldset>'
              + '<legend>示例</legend>'
              + '<p>微软中文软件</p>  '
              + '</fieldset>'
              + '</div>'
              + '<div class="foot">'
              + '<p>脚本(P):</p>'
              + '<select id="footer" name="">'
              + '<option value="">中文 GB2312</option>'
              + '</select>'
              + '</div>'
              + '<a href="#">显示更多字体</a>'
              + '<input class="btn-true" type="button" value="确定">'
              + '<input class="btn-cancel" type="button" value="取消">'
              + '</div>'
              + '</div>'
              + '</div> ';

    
    var $dlg = $(DOM);
    var $btnClose = $dlg.find('.btn-close'),
        $btnCancel = $dlg.find('.btn-cancel'),
        $btnTrue = $dlg.find('.btn-true');
    
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
  
  
    $btnClose.click(function(){$dlg.remove();});
    $btnCancel.click(function(){$dlg.remove();});
    $btnTrue.click(function(){$dlg.remove();});
  };
  return {init:init};
}());
