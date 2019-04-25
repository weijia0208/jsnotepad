/* eslint no-console: ["error", { allow: ["log"]   }] */
/*exported menuData*/
var menuData = [
  {
    title:'文件(F)',
    width:'202px',
    left:0,
    items:[
      {
        title:'新建(N)',
        shortcut:'Ctrl+N',
        enabled:true,
        handler:function(){console.log('menu click 新建');}
      },
      {
        title:'打开(C)',
        shortcut:'Ctrl+O',
        enabled:true,
        handler:function(){console.log('打开');}
      },
      {
        title:'保存(S)',
        shortcut:'Ctrl+S',
        enabled:true,
        handler:function(){console.log('保存');}
      },
      {
        title:'另存为(A)...',
        shortcut:'',
        enabled:true,
        handler:function(){console.log('另存为');}
      },
      {
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null
      },
      {
        title:'页面设置(U)...',
        shortcut:'',
        enabled:true,
        handler:function(){}
      },
      {
        title:'打印(P)...',
        shortcut:'Ctrl+P',
        enabled:true,
        handler:function(){console.log('打印');}
      },
      {
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null
      },
      {
        title:'退出(X)',
        shortcut:'',
        enabled:true,
        handler:function(){}
      }
    ]
  },
  {
    title:'编辑(E)',
    width:'218px',
    left:'55px',
    items:[
      {
        title:'撤销(U)',
        shortcut:'Ctrl+Z',
        enabled:false,
        handler:function(){}
      },
      {
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null
      },
      {
        title:'剪切(T)',
        shortcut:'Ctrl+X',
        enabled:false,
        handler:function(){}
      },
      {
        title:'复制(C)',
        shortcut:'Ctrl+C',
        enabled:false,
        handler:function(){}
      },
      {
        title:'粘贴(C)',
        shortcut:'Ctrl+V',
        enabled:false,
        handler:function(){console.log('粘贴');}
      },
      {
        title:'删除(L)',
        shortcut:'Del',
        enabled:false,
        handler:function(){console.log('删除');}
      },
      {
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null
      },
      {
        title:'查找(F)...',
        shortcut:'Ctrl+F',
        enabled:true,
        handler:function(){console.log('查找');}
      },
      {
        title:'查找下一个(N)',
        shortcut:'F3',
        enabled:true,
        handler:function(){console.log('查找下一个');}
      },
      {
        title:'替换(R)...',
        shortcut:'Ctrl+H',
        enabled:true,
        handler:function(){console.log('替换');}
      },
      {
        title:'转到(G)...',
        shortcut:'Ctrl+G',
        enabled:true,
        handler:function(){console.log('转到');}
      },
      {
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null
      },
      {
        title:'全选(A)',
        shortcut:'Ctrl+A',
        enabled:true,
        handler:function(){console.log('全选');}
      },
      {
        title:'时间/日期(D)',
        shortcut:'F5',
        enabled:true,
        handler:function(){console.log('时间');}
      }
    ]
  },
  {
    title:'格式(O)',
    width:'156px',
    left:'111px',
    items:[
      {
        title:'自动换行(F)',
        shortcut:'',
        enabled:true,
        handler:function(){console.log('自动换行');}
      },
      {
        title:'字体(F)...',
        shortcut:'',
        enabled:true,
        handler:function(){console.log('字体');}
      }
    ]
  },
  { 
    title: '查看(V)',
    width:'138px',
    left:'167px',
    items: [
      {
        title: '状态栏(S)',
        shortcut: '',
        enabled: true,
        handler: function() {}
      }    
    ]
  },
  { 
    title: '帮助(H)',
    width:'166px',
    left:'223px',
    items: [
      {
        title: '查看帮助(H)',
        shortcut: '',
        enabled: true,
        handler: function() {}
      },
      {
        title: '关于记事本(A)',
        shortcut: '',
        enabled: true,
        handler: function() {}
      },  
    ]
  } 
];
