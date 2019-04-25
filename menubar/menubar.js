/*exported $menubar*/
var $menubar = (function(){
  var $DOM = $(''
              + '<div class="notepad-menubar">'
                + '<ul class="titles"></ul>'
              + '</div> ');

  var $titles = $DOM.find('.titles');
  var menuData = null;

  function createTitles(){
    for(var i=0; i<menuData.length;i++){
      var $title = $('<li class="menu-title"></li>');
      $title.html(menuData[i].title);
      $titles.append($title);
    }
  }
  function createMenus(){
    for(var i=0;i<menuData.length;i++){
      var $menu = $('<ul class="menus"></ul>');
      var items = menuData[i].items;
      //console.log(menuData[i].items);
      for(var j=0;j<items.length;j++){
        if(items[j].title === 'hr'){
          var $hr = $('<li class="menu-hr"></li>');
          $menu.append($hr);
          continue;
        }
        var $item = $('<li class="menu-item"></li>');

        $item.html(items[j].title);

        if(!items[j].enabled) $item.addClass('disabled');
        if(items[j].shortcut !== ''){
          var $shortcut = $('<span class="shortcut"></span>');
          $shortcut.html(items[j].shortcut);
          $item.append($shortcut);
        }
        $menu.append($item);
      }
      $menu.css({
        width:menuData[i].width,
        left:menuData[i].left,
        //display:'none'
      });
      $DOM.append($menu);
    }
  }
  function show(data){
    menuData = data;
    $('body').append($DOM);
    createTitles();
    createMenus();
  }
  return {show:show};
}());
