const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'value,v-model',
        descKey: 'app.api.msg.desc.value',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'id',
        descKey: 'app.api.msg.desc.id',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'title',
        descKey: 'app.api.msg.desc.title',
        version: '',
        type: 'String',
        enum: '',
        defVal: '消息提示',
        list: []
      },
      {
        name: 'type',
        descKey: 'app.api.msg.desc.type',
        version: '',
        type: 'String',
        enum: 'alert, confirm, message',
        defVal: '',
        list: []
      },
      {
        name: 'status',
        descKey: 'app.api.msg.desc.status',
        version: '',
        type: 'String',
        enum: 'info, success, warning, error, loading',
        defVal: '',
        list: []
      },
      {
        name: 'message',
        descKey: 'app.api.msg.desc.message',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'showHeader',
        descKey: 'app.api.msg.desc.showHeader',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'showFooter',
        descKey: 'app.api.msg.desc.showFooter',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'lock-view',
        descKey: 'app.api.msg.desc.lockView',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'lock-scroll',
        descKey: 'app.api.msg.desc.lockScroll',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'mask',
        descKey: 'app.api.msg.desc.mask',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'mask-closable',
        descKey: 'app.api.msg.desc.maskClosable',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'esc-closable',
        descKey: 'app.api.msg.desc.escClosable',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'resize',
        descKey: 'app.api.msg.desc.resize',
        version: '2.4.3',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'duration',
        descKey: 'app.api.msg.desc.duration',
        version: '',
        type: 'Number, String',
        enum: '',
        defVal: '3000',
        list: []
      },
      {
        name: 'width',
        descKey: 'app.api.msg.desc.width',
        version: '',
        type: 'Number, String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'height',
        descKey: 'app.api.msg.desc.height',
        version: '',
        type: 'Number, String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'min-width',
        descKey: 'app.api.msg.desc.minWidth',
        version: '2.5.15',
        type: 'Number, String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'min-height',
        descKey: 'app.api.msg.desc.minHeight',
        version: '2.5.15',
        type: 'Number, String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'top',
        descKey: 'app.api.msg.desc.top',
        version: '',
        type: 'Number, String',
        enum: '',
        defVal: '15',
        list: []
      },
      {
        name: 'zIndex',
        descKey: 'app.api.msg.desc.zIndex',
        version: '',
        type: 'Number, String',
        enum: '',
        defVal: '起始 2000',
        list: []
      },
      {
        name: 'fullscreen',
        descKey: 'app.api.msg.desc.fullscreen',
        version: '2.5.18',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: '—',
        desc: '窗口内容模板',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer',
        desc: '窗口底部的模板',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'show',
        desc: '在窗口打开时会触发该事件',
        version: '',
        type: '{type}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'hide',
        desc: '在窗口关闭时会触发该事件',
        version: '',
        type: '{type}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'confirm',
        desc: '点击确定按钮时会触发该事件',
        version: '',
        type: '{type}, event',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'close',
        desc: '点击关闭按钮时会触发该事件',
        version: '',
        type: '{type}, event',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'zoom',
        desc: '窗口缩放时会触发该事件',
        version: '',
        type: '{type}, event',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'open()',
        desc: '手动打开窗口',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'close()',
        desc: '手动关闭窗口',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getBox()',
        desc: '获取当前窗口元素',
        version: '2.5.11',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'maximize()',
        desc: '如果窗口处于常规状态，则最大化窗口',
        version: '2.5.16',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'revert()',
        desc: '如果窗口处于最大化状态，则还原窗口',
        version: '2.5.16',
        type: '',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  }
]

export default apis
